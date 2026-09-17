import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Status } from "@/Types/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const statusClass: Record<Status, string> = {
  "Completed": "",
  "Active": "bg-green-200 text-green-600 dark:bg-green-700 dark:text-green-100",
  "In Development": "bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-100",
  "Inactive": "bg-red-200 text-red-600 dark:bg-red-700 dark:text-red-100",
}
