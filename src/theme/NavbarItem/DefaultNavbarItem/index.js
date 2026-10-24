import React from "react";
import DefaultNavbarItem from "@theme-original/NavbarItem/DefaultNavbarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faPenNib,
  faTags,
  faCodeBranch,
  faImages,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "@site/src/lib/icons/registry";

const navIcons = {
  docs: faBookOpen,
  blog: faPenNib,
  tags: faTags,
  projects: faCodeBranch,
  images: faImages,
  about: faUser,
};

export default function NavbarItemWithIcon({ customProps, label, ...props }) {
  const icon = navIcons[customProps?.navIcon];
  return (
    <DefaultNavbarItem
      {...props}
      label={icon ? (
        <span className="nav-item-label">
          <FontAwesomeIcon icon={icon} aria-hidden="true" />
          <span>{label}</span>
        </span>
      ) : label}
    />
  );
}
