import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/checkout");
  }

  return (
    <div className="page center">
      <h1>Login</h1>
      <p>This is a mock login system.</p>

      <button onClick={handleLogin} className="btn">
        Login as Guest
      </button>
    </div>
  );
}

export default Login;