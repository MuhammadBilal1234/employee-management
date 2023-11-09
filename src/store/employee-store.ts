import { IEmployee } from "@/types/Employee";
import { create } from "zustand";

export const useEmployeeStore: any = create<{
  employees: IEmployee[];
}>((set) => ({
  employees: [],
  populateEmployees: (value: IEmployee[]) =>
    set((state) => ({ employees: value })),
  createEmployee: (value: IEmployee) =>
    set((state) => ({ employees: [value, ...state.employees] })),
  editEmployee: (value: IEmployee) =>
    set((state) => {
      let updatedEmployess = state.employees.map((e) => {
        if (e.id == value.id) {
          return value;
        } else {
          return e;
        }
      });

      return { employees: updatedEmployess };
    }),
  deleteEmployee: (id: number | string) =>
    set((state) => {
      let updatedEmployess = state.employees.filter((e) => e.id != id);

      return { employees: updatedEmployess };
    }),
}));
