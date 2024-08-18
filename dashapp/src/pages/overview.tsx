import { Button } from "antd";
import { useCallback, useState } from "react";

/**
 * overview 页面
 * @returns
 */
const Overview: React.FC = () => {
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

  return (
    <>
      <p>
        load average: {load1m} {load5m} {load10m}
      </p>
      <Button type="primary" onClick={refresh}>
        Refresh
      </Button>
    </>
  );
};

export { Overview };
