"use server";

import {  RegisterSchema } from "@/schemas";
import { z } from "zod";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
  const validateField = RegisterSchema.safeParse(value);
  if (!validateField.success) {
    return { error: "Invalid fields !" };
  }
  return { success: "Email sent !" };
};