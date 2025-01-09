import { Hono } from "hono";
import { verify } from "hono/jwt";
export const blogRouter = new Hono<{
  Bindings: { DATABASE_URL: string; JWT_SECRET: string };
  Variables: { userId: any };
}>();
blogRouter.use("/api/v1/blog/*", async (c, next) => {
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
      }
    } catch (e) {
      c.status(403);
      return c.json({ error: "Invalid token" });
    }
  }
});
blogRouter.put("/api/v1/blog", (c) => {
  return c.text(c.get("userId"));
});
blogRouter.get("/api/v1/blog", async (c) => {
  return c.text(c.get("userId"));
});
blogRouter.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono!");
});
