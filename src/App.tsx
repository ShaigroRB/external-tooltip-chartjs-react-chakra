import { useState } from "react";
import { Line } from "react-chartjs-2";
import { FAKE_DATA } from "./utils";
import { Box, useDisclosure } from "@chakra-ui/react";
import { ChartTooltip, TooltipData, defaultTooltipData } from "./chart-tooltip";

export const App = () => {
  const [] = useState();

  return (
    <Box>
      <LineChart />
    </Box>
  );
};

export const LineChart = () => {
  const {
    isOpen: isTooltipOpen,
    onOpen: openTooltip,
    onClose: closeTooltip,
  } = useDisclosure();

  const [tooltipData, setTooltipData] =
    useState<TooltipData>(defaultTooltipData);

  const { datasets, ...data } = FAKE_DATA;

  return (
    <Box position="relative">
      <Line
        data={{ datasets, ...data }}
        options={{
          interaction: {
            intersect: false,
            mode: "index",
          },
          plugins: {
            tooltip: {
              enabled: false,
              external: ({ tooltip }) => {
                if (tooltip.opacity === 0 && isTooltipOpen) {
                  // reset tooltip data
                  setTooltipData(defaultTooltipData);
                  closeTooltip();
                  return;
                }

                const newTooltipData: TooltipData = {
                  dataIndex: tooltip.dataPoints[0].dataIndex,
                  dataPoints: tooltip.dataPoints,
                  left: tooltip.caretX,
                };

                if (areTooltipDatasDifferent(newTooltipData, tooltipData)) {
                  setTooltipData(newTooltipData);
                  openTooltip();
                }
              },
            },
          },
        }}
        height="90rem"
      />
      {isTooltipOpen && <ChartTooltip {...tooltipData} />}
    </Box>
  );
};

const areTooltipDatasDifferent = (
  data1: TooltipData,
  data2: TooltipData
): boolean => {
  return data1.dataIndex !== data2.dataIndex;
};
