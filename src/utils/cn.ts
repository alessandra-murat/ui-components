import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...buttons: ClassValue[]) {
  return twMerge(clsx(buttons));
}
