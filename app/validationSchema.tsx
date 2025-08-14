import * as z from "zod";

export const createIssueSchema = z.object({
  title: z
    .string()
    .min(1, "zod -> min -> title error")
    .max(10, "zod -> max -> title error"),
  description: z.string().min(1, "zod -> min -> description -> error"),
});
