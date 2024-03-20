import * as z from "zod";

const emailSchema = z.string().email({ message: "Invalid email" });
const passwordSchema = z.string().min(1, { message: "Password is required" });
const nameSchema = z.string().min(1, { message: "Name is required" });
export const LoginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const RegisterSchema = z.object({
  name : nameSchema,
  email: emailSchema,
  password: passwordSchema,
});
