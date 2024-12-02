export const Categories = {
  doctor: "Врач",
  nurse: "Медсестра",
} as const
export type Category = keyof typeof Categories

export const Departments = {
  cardiology: "Кардиология",
  surgeon: "Хирургия",
} as const
export type Department = keyof typeof Departments
export const DepartmentOptions = Object.entries(Departments).map(
  ([key, value]) => ({ id: key, name: value })
)
