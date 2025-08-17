import { Button } from "@mui/material";

/**
 * 设置wifi页面
 */
const WifiAdminPage: React.FC = () => {
  const now = new Date();

  return (
    <>
      <p>time: {now.toString()}</p>
      <Button />
      <p>set rst:</p>
    </>
  );
};

export { WifiAdminPage };
