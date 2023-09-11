import { Box, Flex, Tooltip } from "@chakra-ui/react";
import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip as ChartTooltip,
  TooltipItem,
} from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { FAKE_DATA } from "./utils";

Chart.register([
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTooltip,
]);

export const App = () => <LineChart />;

type TooltipData = {
  dataPoints: TooltipItem<"line">[];
  left: number;
};

const LineChart = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [data, setData] = useState<TooltipData>({ dataPoints: [], left: -1 });

  const resetData = () => {
    setData({ dataPoints: [], left: -1 });
  };
  const closeTooltip = () => {
    setIsTooltipOpen(false);
  };
  const openTooltip = () => {
    setIsTooltipOpen(true);
  };

  return (
    <Box position="relative">
      <Line
        data={FAKE_DATA}
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
                  resetData();
                  closeTooltip();
                  return;
                }

                const newData = {
                  dataPoints: tooltip.dataPoints,
                  left: tooltip.caretX,
                };

                if (arePositionsDifferent(data, newData)) {
                  setData(newData);
                  openTooltip();
                }
              },
            },
          },
        }}
      />
      {isTooltipOpen && <CustomTooltip {...data} />}
    </Box>
  );
};

const arePositionsDifferent = (d1: TooltipData, d2: TooltipData) =>
  d1.left !== d2.left;

const CustomTooltip = (data: TooltipData) => (
  <Tooltip
    isOpen={true}
    label={
      <Box>
        {data.dataPoints.map((point) => (
          <Flex gridGap="1rem" key={`${point.datasetIndex}-${point.dataIndex}`}>
            <Box
              backgroundColor={point.dataset.borderColor as string}
              boxSize="1rem"
            />
            {point.formattedValue}
          </Flex>
        ))}
      </Box>
    }
    hasArrow
    placement="right"
  >
    <Box boxSize="1rem" position="absolute" top="35%" left={data.left} />
  </Tooltip>
);
