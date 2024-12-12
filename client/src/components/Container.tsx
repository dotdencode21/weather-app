import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("min-h-dvh bg-gradient-to-b from-[#BCE8FF] to-white", className)}>
      {children}
    </div>
  )
}