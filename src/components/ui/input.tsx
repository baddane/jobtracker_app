import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-[#1c1e21] placeholder:text-[#65676b] selection:bg-[#1877f2] selection:text-white border-[#e4e6eb] h-9 w-full min-w-0 rounded-md border bg-[#f0f2f5] px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-[#1877f2] focus-visible:ring-[#1877f2]/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-[#e41d1d]/20 dark:aria-invalid:ring-[#e41d1d]/40 aria-invalid:border-[#e41d1d]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
