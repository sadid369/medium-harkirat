import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
export const userRouter = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET: string };
  Variables: { userId: any };
}>();
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { email, name, password } = body;
  if (!email || !name || !password) {
    c.status(403);
    return c.json({ error: "Missing required fields" });
  }
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      c.status(403);
      return c.json({ error: "User already exists" });
    }
    const user = await prisma.user.create({
      data: { email, name, password },
    });
    const token = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    // return c.json(user, { headers: { Authorization: `Bearer ${token}` } });
    return c.json({ user, token });
  } catch (error) {
    return c.json({ error });
  }
});
userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const { email, password } = body;

  if (!email || !password) {
    c.status(403);
    return c.json({ error: "Missing required fields" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user || user.password !== password) {
      c.status(403);
      return c.json({ error: "Invalid credentials" });
    }
    const token = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.json(user, { headers: { Authorization: `Bearer ${token}` } });
  } catch (error) {
    return c.json({ error });
  }
});
