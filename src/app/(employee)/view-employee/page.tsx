import { IEmployee } from "@/types/Employee";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default async function ViewEmployees() {
  // const employess = await getEmployeeData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={[]} />
    </div>
  );
}
