import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-14 w-full rounded-xl border border-white/10 bg-background-dark/50 px-5 text-white outline-none transition-all placeholder:text-gray-600 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }