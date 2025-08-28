/* eslint-disable react-refresh/only-export-components */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "cursor-pointer disabled:cursor-not-allowed mr-2 px-3 py-2 min-w-15 h-10 rounded-md transition-colors ease-in-out duration-300 text-[var(--context-text-overlay-white-primary-text-overlay-w-primary)] text-base bg-[var(--context-background-fill-brand-blue-primary-bg-fill-brand-primary)] hover:bg-[var(--context-background-fill-brand-blue-primary-bg-fill-brand-primary-hover)] active:bg-[var(--context-background-fill-brand-blue-primary-bg-fill-brand-primary-active)] disabled:bg-[var(--context-background-fill-brand-blue-primary-bg-fill-brand-primary-disabled)] focus:bg-[var(--context-background-fill-brand-blue-primary-bg-fill-brand-primary)]",
        destructive:
          "cursor-pointer disabled:cursor-not-allowed mr-2 px-3 py-2 min-w-15 h-10 rounded-md transition-colors ease-in-out duration-300 bg-[var(--context-background-fill-danger-primary-bg-fill-danger-primary)] hover:bg-[var(--context-background-fill-danger-primary-bg-fill-danger-primary-hover)] active:bg-[var(--context-background-fill-danger-primary-bg-fill-danger-primary-active)] disabled:bg-[var(--context-background-fill-danger-primary-bg-fill-danger-primary-disabled)]",
        outline:
          "border cursor-pointer bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "cursor-pointer disabled:cursor-not-allowed mr-2 px-3 py-2 min-w-15 h-10 rounded-md transition-colors ease-in-out duration-300 border border-[var(--context-border-brand-blue-primary-border-brand-primary] hover:border-[var(--context-border-brand-blue-primary-border-brand-primary-hover)] disabled:border-[var(--context-border-brand-blue-primary-border-brand-primary-disabled)] text-[var(--context-text-brand-blue-text-brand)] hover:text-[var(--context-text-brand-blue-text-brand-hover)] active:text-[var(--context-text-brand-blue-text-brand-active)] disabled:text-[var(--context-text-brand-blue-text-brand-disabled)] bg-[var(--context-background-surface-base-primary-bg-surface-base-primary)]",
        ghost: "hover:cursor-pointer hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
