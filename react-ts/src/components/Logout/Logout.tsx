import { useNavigate } from "react-router-dom";
import { UserKey, deleteUser } from "../../redux/states/user";
import { clearLocalStorage } from "../../utilities";
import { PublicRoutes } from "../../models";
import { useDispatch } from "react-redux";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    clearLocalStorage(UserKey);
    dispatch(deleteUser());
    navigate(PublicRoutes.LOGIN, {replace: true});
  };
  return (
    <button onClick={logout}>Log Out</button>
  )
};
export default Logout;