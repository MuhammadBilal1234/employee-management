"use client";

import { IEmployee } from "@/types/Employee";
import { ColumnDef } from "@tanstack/react-table";
import { Trash, Pencil } from "lucide-react";

export const columns: ColumnDef<IEmployee>[] = [
  {
    accessorKey: "profile_image",
    header: "Avatar",
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
      return (
        <div className="flex space-x-1">
          <Trash className="cursor-pointer text-sm" size={18} />
          <Pencil className="cursor-pointer text-sm" size={18} />
        </div>
      );
    },
  },
];
