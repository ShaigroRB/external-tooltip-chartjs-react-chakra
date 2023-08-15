import { useState } from "react";
import { Line } from "react-chartjs-2";
import { FAKE_DATA } from "./utils";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [] = useState();

  return (
    <Box>
      <LineChart />
    </Box>
  );
};

export const LineChart = () => {
  return (
    <Line
      data={FAKE_DATA}
      options={{
        interaction: {
          intersect: false,
          mode: "index",
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
        },
      }}
      height="90rem"
    />
  );
};
