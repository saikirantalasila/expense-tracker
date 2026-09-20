import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin@4321") {
      alert("Login Successful");
      setEmail("");
      setPassword("");
      setShowPassword(false);
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="login-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="Please enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            e.target.setCustomValidity("");
          }}
          onInvalid={(e) =>
            e.target.setCustomValidity("Please enter your email")
          }
        />
        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input
            id="password"
            className="login-password"
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            required
            placeholder="Please enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              e.target.setCustomValidity("");
            }}
            onInvalid={(e) =>
              e.target.setCustomValidity("Please enter your password")
            }
          />
          <button
            className="password-toggle"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
