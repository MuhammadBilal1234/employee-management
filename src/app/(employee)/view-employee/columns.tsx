"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEmployeeStore } from "@/store/employee-store";
import { IEmployee } from "@/types/Employee";
import { ColumnDef } from "@tanstack/react-table";
import { Trash, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<IEmployee>[] = [
  {
    accessorKey: "profile_image",
    header: "Avatar",
    cell: ({ row }) => {
      const employee = row.original;
      return (
        <Avatar className="w-16 h-16">
          <AvatarImage src={employee.profile_image} />
          <AvatarFallback>{`${employee.employee_name[0]}${
            employee.employee_name.split(" ")?.[1]?.[0] ?? ""
          }`}</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "employee_name",
    header: "Name",
    cell: ({ row }) => {
      const name: string = row.getValue("employee_name");
      let shortName = name.replace(/(.{25})..+/, "$1…");
      return <div>{shortName}</div>;
    },
  },
  {
    accessorKey: "employee_age",
    header: "Age",
  },
  {
    accessorKey: "employee_salary",
    header: "Salary",
  },
  {
    id: "actions",
    header: () => <div>Actions</div>,
    cell: ({ row }) => {
      const employee = row.original;
      const router = useRouter();
      const store = useEmployeeStore();
      return (
        <div className="flex space-x-1">
          <Trash
            className="cursor-pointer text-sm"
            size={18}
            onClick={() => store.deleteEmployee(employee.id)}
          />
          <Pencil
            className="cursor-pointer text-sm"
            size={18}
            onClick={() => router.push(`/edit-employee/${employee.id}`)}
          />
        </div>
      );
    },
  },
];
