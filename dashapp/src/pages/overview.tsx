import { useCallback, useEffect, useState } from "react";
import { getLoadAvg, LoadAvgDto } from "../api";
import { Stack } from "@mui/material";
import { Gauge } from "@mui/x-charts";

type LoadGaugeProps = {
  load?: LoadAvgDto;
};

const LoadGauge: React.FC<LoadGaugeProps> = (props) => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={100} height={100} value={props.load?.load1m} />
      <Gauge width={100} height={100} value={props.load?.load5m} />
      <Gauge width={100} height={100} value={props.load?.load15m} />
    </Stack>
  );
};

/**
 * overview 页面
 */
const Overview: React.FC = () => {
  const now = new Date();
  const [loadAvg, setLoadAvg] = useState<LoadAvgDto>();

  const refresh = useCallback(() => {
    const p = async () => {
      try {
        const loadAvg = await getLoadAvg();
        setLoadAvg(loadAvg);
      } catch (e: any) {
        //忽略异常, 框架已经有提示了.
      }
    };

    p();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(refresh, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [refresh]);

  return (
    <>
      <p>time: {now.toString()}</p>
      <p>
        load average: {loadAvg?.load1m} {loadAvg?.load5m} {loadAvg?.load15m}
      </p>
      <LoadGauge load={loadAvg}></LoadGauge>
    </>
  );
};

export { Overview };
