import { createIcon } from "@chakra-ui/react";

/**
 * From https://www.reshot.com/free-svg-icons/item/stick-up-right-Q3SVTWDLPM/
 */
export const NeutralIcon = createIcon({
  displayName: "NeutralIcon",
  viewBox: "0 0 200 200",
  defaultProps: { fill: "#6b8ba4" }, // light green (darker than `lightgreen``)
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z" />
    </svg>
  ),
});
