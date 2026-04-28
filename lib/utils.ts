import { env } from "@/env";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function absoluteUrl(path: string) {
  if (!path) return env.SITE_URL;
  return `${env.SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
