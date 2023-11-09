"use client";

import { employeeSchema } from "@/lib/schema/employee-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEmployeeStore } from "@/store/employee-store";
import { v4 } from "uuid";
import { IEmployee } from "@/types/Employee";
import { useRouter } from "next/navigation";

type InitialValues = z.infer<typeof employeeSchema> & {
  id: Number;
  profile_image: string;
};

export default function EmployeeForm({
  initialValues = {
    employee_age: 0,
    employee_name: "",
    employee_salary: 0,
    id: 0,
    profile_image: "",
  },
}: {
  initialValues?: InitialValues;
}) {
  const store = useEmployeeStore();
  const router = useRouter();

  const form = useForm<z.infer<typeof employeeSchema>>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      employee_age: initialValues.employee_age,
      employee_name: initialValues.employee_name,
      employee_salary: initialValues.employee_salary,
    },
  });

  function onSubmit(values: z.infer<typeof employeeSchema>) {
    console.log(values);
    const payload: IEmployee = {
      ...values,
      id: v4(),
      profile_image: "",
    };

    store.createEmployee(payload);
    router.push("/view-employee");
  }

  console.log(store);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <main className="grid  sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="employee_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee Name</FormLabel>
                  <FormControl>
                    <Input placeholder="enter name" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="employee_age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee Age</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter age"
                      {...field}
                      type="number"
                      onChange={(event) => {
                        if (
                          isNaN(
                            +(
                              form.getValues("employee_salary") +
                              event.target.value
                            )
                          )
                        ) {
                          return;
                        }
                        field.onChange(+event.target.value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="employee_salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee Salary</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter salary"
                      {...field}
                      type="text"
                      onChange={(event) => {
                        if (
                          isNaN(
                            +(
                              form.getValues("employee_salary") +
                              event.target.value
                            )
                          )
                        ) {
                          return;
                        }
                        field.onChange(+event.target.value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </main>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
