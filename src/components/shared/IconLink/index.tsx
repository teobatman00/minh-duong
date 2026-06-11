import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconPrefix } from "@fortawesome/fontawesome-svg-core";

export default function IconLink({
  href,
  to,
  icon,
  iconPrefix = "fab",
  label,
  className,
}: Readonly<{
  href?: string;
  to?: string;
  icon: string;
  iconPrefix?: IconPrefix;
  label: string;
  className?: string;
}>) {
  return (
    <Link
      href={href}
      to={to}
      className={clsx("navbar__item navbar__link", className)}
      aria-label={label}
      title={label}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
    >
      <FontAwesomeIcon icon={[iconPrefix, icon as never]} />
    </Link>
  );
}
