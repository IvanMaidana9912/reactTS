import { useDispatch } from "react-redux";
import { getMorty } from "../../services"
import { UserKey, createUser, deleteUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "../../models";
import { useEffect } from "react";
import { clearLocalStorage } from "../../utilities";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(deleteUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({... result, rol: Roles.ADMIN})); // originalmente es: dispatch(createUser(result)); el rol se lo toma desde la bbdd
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h2>Este es el login</h2>
      <button onClick={login}>Log In</button>
    </div>
  )
}

export default Login