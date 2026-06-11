import clsx from "clsx";
import React, { ReactNode } from "react";

export default function Card({
  children,
  className,
  as: Component = "div",
  hoverable = true,
}: Readonly<{
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
  hoverable?: boolean;
}>) {
  return (
    <Component
      className={clsx(
        "tw-rounded-xl tw-border tw-border-gray-200 dark:tw-border-gray-800",
        "tw-bg-white dark:tw-bg-gray-900 tw-p-6",
        "tw-shadow-sm",
        hoverable && "hover:tw-shadow-md tw-transition-shadow tw-duration-200",
        className
      )}
    >
      {children}
    </Component>
  );
}
