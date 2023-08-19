import { Box, Flex, Tooltip, Text } from "@chakra-ui/react";
import { TooltipItem } from "chart.js";
import { DownRightIcon, NeutralIcon, SquareIcon, UpRightIcon } from "../icons";

export type TooltipData = {
  dataIndex: number;
  dataPoints: TooltipItem<"line">[];
  left: number;
};

export const defaultTooltipData: TooltipData = {
  dataIndex: -1,
  dataPoints: [],
  left: 0,
};

/**
 * Returns whether current value is higher than the previous one.
 * If the current value is the first, returns null.
 */
const isCurrentHigherThanPrev = (
  currIndex: number,
  values: number[]
): boolean | null => {
  if (currIndex === 0) {
    return null;
  }

  const prevIndex = currIndex - 1;
  return values[currIndex] > values[prevIndex];
};

export const ChartTooltip = ({ dataPoints, left }: TooltipData) => {
  return (
    <Tooltip
      isOpen={true}
      label={
        <Box>
          {dataPoints.map((point) => (
            <DataPoint
              key={`${point.datasetIndex}-${point.dataIndex}`}
              point={point}
            />
          ))}
        </Box>
      }
      hasArrow
      placement="right"
    >
      <Box position="absolute" top="35%" left={left} />
    </Tooltip>
  );
};

type DataPointProps = {
  point: TooltipItem<"line">;
};
const DataPoint = ({ point }: DataPointProps) => {
  const isHigher = isCurrentHigherThanPrev(
    point.dataIndex,
    point.dataset.data as number[]
  );
  return (
    <Flex gridGap="2" alignItems="center">
      <Box
        as={SquareIcon}
        boxSize="4"
        fill={point.dataset.borderColor as string}
      />
      <Box as={getEvolutionIcon(isHigher)} boxSize="4" />
      <Text>{point.formattedValue}</Text>
    </Flex>
  );
};

const getEvolutionIcon = (isHigher: boolean | null) => {
  if (isHigher === null) {
    return NeutralIcon;
  }
  return isHigher ? UpRightIcon : DownRightIcon;
};
