import { Button } from "antd";
import { useCallback, useEffect, useState } from "react";

/**
 * overview 页面
 * @returns
 */
const Overview: React.FC = () => {
  const now = new Date();
  const [load1m, setLoad1m] = useState(Math.random());
  const [load5m, setLoad5m] = useState(Math.random());
  const [load10m, setLoad10m] = useState(Math.random());

  const refresh = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setLoad1m(Math.random());
      setLoad5m(Math.random());
      setLoad10m(Math.random());
    },
    []
  );

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
