import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { PrivateRoutes, Roles } from "../models";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    rol: Roles;
}

function RoleGuard({ rol }: Props) {
    const userState = useSelector((store: AppStore) => store.user);
    return userState.rol === rol ? <Outlet /> : <Navigate replace to={PrivateRoutes.PRIVATE} />;
};

export default RoleGuard;