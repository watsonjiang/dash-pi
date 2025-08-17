import { DashboardLayout, PageContainer } from "@toolpad/core";
import { Outlet } from "react-router-dom";

export default function DashLayout() {
  return (
    <DashboardLayout>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
