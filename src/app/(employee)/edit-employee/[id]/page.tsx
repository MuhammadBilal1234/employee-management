"use client";

import EmployeeForm from "@/components/Forms/Employee";
import { useEmployeeStore } from "@/store/employee-store";
import { IEmployee } from "@/types/Employee";

export default function EditEmployee({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const store = useEmployeeStore();
  const editEmployee = store.employees.find(
    (e: IEmployee) => e.id == params.id
  );

  console.log(editEmployee);

  return (
    <main className="py-5">
      {editEmployee && (
        <EmployeeForm initialValues={editEmployee} editEmployee />
      )}
    </main>
  );
}
