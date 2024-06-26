import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import PropTypes from "prop-types";
export const ProtectedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isAuth } = useAuth();
  const shouldRedirect = !isAuth;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
ProtectedRoute.propTypes = {
  component: PropTypes.any,
  redirectTo: PropTypes.any,
};
