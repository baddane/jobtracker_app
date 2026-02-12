import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[#1877f2] focus-visible:ring-[#1877f2]/50 focus-visible:ring-[3px] aria-invalid:ring-[#e41d1d]/20 dark:aria-invalid:ring-[#e41d1d]/40 aria-invalid:border-[#e41d1d]",
  {
    variants: {
      variant: {
        default: "bg-[#1877f2] text-white hover:bg-[#166fe5] shadow-sm",
        destructive:
          "bg-[#e41d1d] text-white hover:bg-[#d91a1a] focus-visible:ring-[#e41d1d]/20 dark:focus-visible:ring-[#e41d1d]/40",
        outline:
          "border border-[#e4e6eb] bg-white text-[#1c1e21] hover:bg-[#f0f2f5] hover:border-[#b0b3b8] shadow-sm",
        secondary:
          "bg-[#e4e6eb] text-[#1c1e21] hover:bg-[#d8dadf]",
        ghost:
          "hover:bg-[#f0f2f5] hover:text-[#1c1e21]",
        link: "text-[#1877f2] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
