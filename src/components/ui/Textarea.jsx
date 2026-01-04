import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full resize-none rounded-xl border border-white/10 bg-background-dark/50 p-5 text-white outline-none transition-all placeholder:text-gray-600 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }