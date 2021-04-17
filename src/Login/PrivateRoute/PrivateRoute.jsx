import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";

export function PrivateRoute({ path, ...props }) {
  const { login } = useAuth();
  console.log({ path });
  return login ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
