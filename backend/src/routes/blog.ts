import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { CreatePostInput, UpdatePostInput } from "@sadiddev/common";
export const blogRouter = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET: string };
  Variables: { userId: any };
}>();
blogRouter.use("/*", async (c, next) => {
  const token = c.req.header("Authorization")?.split(" ")[1];
  if (!token) {
    c.status(403);
    return c.json({ error: "Missing token" });
  }
  if (token) {
    try {
      const payload = await verify(token, c.env.JWT_SECRET);
      if (payload) {
        c.set("userId", payload.id);
        await next();
      } else {
        c.status(403);
        return c.json({ error: "Invalid token" });
      }
    } catch (e) {
      c.status(403);
      return c.json({ error: "Invalid token" });
    }
  }
});
blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = CreatePostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: "Invalid request body" });
  }
  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: c.get("userId"),
      },
    });
    return c.json(blog);
  } catch (error) {
    return c.json(error);
  }
});
blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = UpdatePostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: "Invalid request body" });
  }
  try {
    const blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
    });
    return c.json(blog);
  } catch (error) {
    return c.json(error);
  }
});
// TODO: Add pagination
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const blog = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    return c.json(blog);
  } catch (error) {
    return c.json(error);
  }
});
blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = c.req.param("id");

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id,
      },
      include: {
        author: true,
      },
    });
    return c.json(blog);
  } catch (error) {
    return c.json(error);
  }
});
