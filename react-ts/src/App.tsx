import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "./models";
import { AuthGuard, RoleGuard } from "./guards";
import { RoutesWithNotFound } from "./utilities";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Logout } from "./components/Logout";
import './App.css';
import { Dashboard } from "./pages/Private";

const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RoutesWithNotFound>
            <Logout />
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
};

export default App;