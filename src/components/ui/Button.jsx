import { forwardRef } from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-blue hover:bg-blue-600 text-white shadow-glow hover:shadow-glow-sm",
        secondary: "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm text-white",
        outline: "border border-white/20 bg-transparent hover:bg-white/5 text-white",
        ghost: "hover:bg-white/5 text-white",
        link: "text-primary-blue underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-primary-blue to-blue-600 hover:to-blue-500 text-white shadow-lg hover:shadow-glow"
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base font-semibold",
        xl: "h-14 px-10 text-lg font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }