import React from "react";

import { media } from "@utils/theme";

/**
 * This component wraps page content sections (eg header, footer, main).
 * It provides consistent margin and max width behavior.
 */
const Container = ({ children, css = {} }) => (
  <div
    css={{
      // paddingLeft: 20,
      // paddingRight: 20,
      marginLeft: "auto",
      marginRight: "auto",

      [media.greaterThan("medium")]: {
        width: "90%",
      },

      [media.size("xxlarge")]: {
        maxWidth: 900,
      },
      ...css,
    }}
  >
    {children}
  </div>
);

export default Container;
