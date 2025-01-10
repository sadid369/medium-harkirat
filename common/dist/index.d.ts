import z from "zod";
export declare const SignupInput: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const SigninInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const CreatePostInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    published: boolean;
}, {
    title: string;
    content: string;
    published?: boolean | undefined;
}>;
export declare const UpdatePostInput: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
}, {
    title?: string | undefined;
    content?: string | undefined;
    published?: boolean | undefined;
}>;
export type SignupInput = z.infer<typeof SignupInput>;
export type SigninInput = z.infer<typeof SigninInput>;
export type CreatePostInput = z.infer<typeof CreatePostInput>;
export type UpdatePostInput = z.infer<typeof UpdatePostInput>;
