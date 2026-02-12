import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-[#e4e6eb] placeholder:text-[#65676b] focus-visible:border-[#1877f2] focus-visible:ring-[#1877f2]/50 aria-invalid:ring-[#e41d1d]/20 dark:aria-invalid:ring-[#e41d1d]/40 aria-invalid:border-[#e41d1d] bg-[#f0f2f5] flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
