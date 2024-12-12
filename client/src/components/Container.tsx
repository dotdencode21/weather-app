import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "motion/react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <motion.div  
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }} 
      className={cn("min-h-dvh bg-gradient-to-b from-[#BCE8FF] to-white", className)}
    >
      {children}
    </motion.div>
  )
}