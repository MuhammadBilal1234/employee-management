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
}));
