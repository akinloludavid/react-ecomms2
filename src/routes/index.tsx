import React from "react";
import { useRoutes, useLocation } from "react-router-dom";

import PageWrapper from "../components/PageWrapper";
import { PUBLIC_ROUTES } from "./publicRoutes";

const AppWrapper = () => {
  const routes = useRoutes(PUBLIC_ROUTES);
  return routes;
};

const Pages = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <PageWrapper>
        <AppWrapper key={location.pathname} />
      </PageWrapper>
    </React.Fragment>
  );
};

export default Pages;
