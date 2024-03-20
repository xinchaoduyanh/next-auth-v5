"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const validateField = LoginSchema.safeParse(value);
  if (!validateField.success) {
    return { error: "Invalid fields !" };
  }
  return { success: "Email sent !" };
};
