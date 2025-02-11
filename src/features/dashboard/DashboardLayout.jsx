import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

import React from "react";

function DashboardLayout() {
  return <StyledDashboardLayout>123</StyledDashboardLayout>;
}

export default DashboardLayout;
