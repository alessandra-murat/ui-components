import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const tagVariants = cva("px-lg py-xs w-fit font-semibold rounded", {
  variants: {
    variant: {
      filled: "bg-brand-500 bg-opacity-10 text-brand-500",
      outlined: "bg-transparent border-2 border-brand-500 text-brand-500",
      borderless: "bg-transparent text-brand-500",
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  text?: string;
}

const TagRoot: React.FC<TagProps> = ({
  className,
  children,
  variant,
  ...props
}) => {
  return (
    <div className={cn(tagVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
};

export { TagRoot, tagVariants };
