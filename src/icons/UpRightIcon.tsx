import { createIcon } from "@chakra-ui/react";

/**
 * From https://www.reshot.com/free-svg-icons/item/stick-up-right-Q3SVTWDLPM/
 */
export const UpRightIcon = createIcon({
  displayName: "UpRightIcon",
  viewBox: "0 0 200 200",
  defaultProps: { fill: "#75fd63" }, // light green (darker than `lightgreen``)
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M17 8v4a1 1 0 0 1-2 0v-1.586l-6.293 6.293a1 1 0 1 1-1.414-1.414L13.586 9H12a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1z" />
    </svg>
  ),
});
