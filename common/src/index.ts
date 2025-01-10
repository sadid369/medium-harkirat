import z from "zod";

export const SignupInput = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(6),
});

export const SigninInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const CreatePostInput = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().default(false),
});

export const UpdatePostInput = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  published: z.boolean().optional(),
});
export type SignupInput = z.infer<typeof SignupInput>;
export type SigninInput = z.infer<typeof SigninInput>;
export type CreatePostInput = z.infer<typeof CreatePostInput>;
export type UpdatePostInput = z.infer<typeof UpdatePostInput>;
