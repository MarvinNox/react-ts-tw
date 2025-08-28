import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "text-[var(--context-text-base-tertiary-text-base-tertiary)] border rounded-[8px] placeholder:text-[14px] placeholder:font-normal  border-[var(--context-border-base-primary-border-base-primary)]",
        "hover:border-[var(--context-border-base-primary-border-base-primary-hover)]",
        "bg-[var(--context-background-surface-base-primary-bg-surface-base-primary)]",
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus:border-[var(--context-border-solid-border-brand-solid)] focus:bg-[var(--context-background-surface-base-primary-bg-surface-base-primary)] focus:shadow-[0_0_0_3px_var(--theme-brand-blue-300)]",
        "invalid:border-[var(--context-border-solid-border-danger-solid)] invalid:focus:border-[var(--context-border-solid-border-danger-solid)] invalid:focus:shadow-[0_0_0_3px_var(--theme-danger-300)]",
        className
      )}
      {...props}
    />
  );
}

export { Input };
