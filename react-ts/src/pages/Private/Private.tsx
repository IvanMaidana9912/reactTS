import { PrivateRoutes } from "../../models"
import { Route, Navigate } from "react-router-dom";
import { RoutesWithNotFound } from "../../utilities";
import { lazy } from "react";

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));

function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path="*" element={<> NOT FOUND </>} />
    </RoutesWithNotFound>
  )
}
export default Private;