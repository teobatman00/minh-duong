import React from "react";
import ComponentTypes from "@theme-original/NavbarItem/ComponentTypes";
import IconLink from "@site/src/components/shared/IconLink";

export default {
  ...ComponentTypes,
  "custom-iconLink": (props) => <IconLink {...props} />,
};
