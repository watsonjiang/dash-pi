import { useCallback, useEffect, useState } from "react";
import { getLoadAvg } from "../api";

/**
 * overview 页面
 */
const Overview: React.FC = () => {
  const now = new Date();
  const [load1m, setLoad1m] = useState(-1);
  const [load5m, setLoad5m] = useState(-1);
  const [load10m, setLoad10m] = useState(-1);

  const refresh = useCallback(() => {
    const p = async () => {
      try {
        const loadAvg = await getLoadAvg();
        setLoad1m(loadAvg.load1m);
        setLoad5m(loadAvg.load5m);
        setLoad10m(loadAvg.load10m);
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
        load average: {load1m} {load5m} {load10m}
      </p>
    </>
  );
};

export { Overview };
