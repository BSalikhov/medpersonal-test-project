import type { Category, Department } from "./constants"

export interface User {
  id: string
  name: string
  category: Category
  department: Department
}
