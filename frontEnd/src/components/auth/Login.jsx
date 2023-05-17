import axios from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./AuthForm.module.scss";
import toast from "react-hot-toast";
// import useAuth from '../../hooks/useAuth.js';

function Login() {
  const navigate = useNavigate();
  //   const { verifyAuth, auth } = useAuth();
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (auth) {
  //       navigate('/');
  //     }
  //   }, [auth]);

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await axios.post("/api/auth/login", {
        email,
        password,
      });
      //   await verifyAuth();
      navigate("/");
      toast.success("Login Success");
    } catch (err) {
      console.log(err);
      toast.error("Login Failed");
      //   verifyAuth();
    }
  };
  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Login</h1>
      <form className={classes.authForm} onSubmit={login}>
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="email" required />
        </label>{" "}
        <br />
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </label>
        <button type="submit">Login</button>
        <br />
      </form>
      <br />
      <label>
        <button className={classes.Fp} name="forgotPassword">
          <Link to="/forgot-password">Forgot password!?</Link>
        </button>
      </label>
    </div>
  );
}

export default Login;
