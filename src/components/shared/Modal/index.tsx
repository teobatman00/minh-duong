import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

export default function Modal({
  title,
  children,
}: Readonly<{
  readonly title: string;
  readonly children: ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <div className={styles.overlay} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className={styles.panel}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>
  );

  // Portal out of ancestor stacking contexts (e.g. Home hero `isolation: isolate`).
  if (!mounted) {
    return null;
  }

  return createPortal(content, document.body);
}
