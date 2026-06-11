import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import "@site/src/lib/icons/registry"; // Registers all FontAwesome icons used across the site.

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Icon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.
};