import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-[#1877f2] focus-visible:ring-[#1877f2]/50 focus-visible:ring-[3px] aria-invalid:ring-[#e41d1d]/20 dark:aria-invalid:ring-[#e41d1d]/40 aria-invalid:border-[#e41d1d] transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#1877f2] text-white [a&]:hover:bg-[#166fe5]",
        secondary:
          "border-transparent bg-[#e4e6eb] text-[#1c1e21] [a&]:hover:bg-[#d8dadf]",
        destructive:
          "border-transparent bg-[#e41d1d] text-white [a&]:hover:bg-[#d91a1a] focus-visible:ring-[#e41d1d]/20 dark:focus-visible:ring-[#e41d1d]/40",
        outline:
          "border-[#e4e6eb] text-[#1c1e21] [a&]:hover:bg-[#f0f2f5] [a&]:hover:text-[#1c1e21]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
