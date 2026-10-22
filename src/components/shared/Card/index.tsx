import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./styles.module.css";

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
      className={clsx(styles.card, hoverable && styles.hoverable, className)}
    >
      {children}
    </Component>
  );
}
