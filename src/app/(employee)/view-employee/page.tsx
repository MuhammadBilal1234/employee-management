import { IEmployee } from "@/types/Employee";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function getEmployeeData(): Promise<IEmployee[]> {
  try {
    const employess = await fetch(
      `https://dummy.restapiexample.com/api/v1/employees`
    ).then((res) => res.json());
    return [
      ...employess.data,
      {
        employee_age: 0,
        employee_name:
          "qweqwe wq eqw e qwe qw eq we qw eqw e qwe q we qweqweqweqwe qweqweqweqw eqw e qwe qw eq we qwe qw eqw e qw",
        employee_salary: 200,
        id: 123123,
        profile_image: "",
      },
    ];
  } catch (e) {
    throw e;
  }
}

export default async function ViewEmployees() {
  const employess = await getEmployeeData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={employess} />
    </div>
  );
}
