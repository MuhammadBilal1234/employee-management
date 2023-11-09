import { z } from "zod";

export const employeeSchema = z.object({
  employee_name: z.string().trim().min(3, {
    message: "name must contain at-least 3 letters",
  }),
  employee_salary: z
    .number()
    .positive("Salary must be greater then 0")
    .int("must not contain decimal value")
    .transform((val) => +val),
  employee_age: z.number().positive("Age must be greater then 0").max(120),
  profile_image: z.string(),
});
