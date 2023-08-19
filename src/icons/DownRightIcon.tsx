import { createIcon } from "@chakra-ui/react";

/**
 * From https://www.reshot.com/free-svg-icons/item/stick-down-right-NTGSJXFRUE/
 */
export const DownRightIcon = createIcon({
  displayName: "DownRightIcon",
  viewBox: "0 0 200 200",
  defaultProps: { fill: "#ff474c" }, // light red
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M17 12v4a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h1.586L7.293 8.707a1 1 0 1 1 1.414-1.414L15 13.586V12a1 1 0 0 1 2 0z" />
    </svg>
  ),
});
