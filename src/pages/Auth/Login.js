import { useEffect, useState, useRef, useContext } from "react";
import AuthContext from "../../context/AuthProvider.js";
import { Link } from "react-router-dom";
import axios from "axios";
import * as MUi from "@mui/material";
//   Avatar,
//   Button,
//   FormControl,
//   Grid,
//   Input,
//   InputLabel,
//   Paper,
//   Typography,
// } from "@mui/material";
import { LockOutlined, Google } from "@mui/icons-material";
// import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  const { setAuth } = useContext(AuthContext);
  // const userRef = useRef();
  const errRef = useRef();

  const defaultUser = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(defaultUser);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   useRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg("");
  }, [defaultUser]);

  const paperStyle = {
    padding: 20,
    minHeight: "40vh",
    width: 300,
  };

  function handleChange(event) {
    setUser((old) => {
      let newValue = event.target.value;
      return { ...old, [event.target.name]: newValue };
    });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    setSuccess(true);

    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/users/login",
    //     JSON.stringify(user),
    //     { withCredentials: true }
    //   );
    //   console.log(JSON.stringify(response?.data));
    //   // console.log(JSON.stringify(response));
    //   const accessToken = response?.data?.accessToken;
    //   const isAdmin = response?.data?.isAdmin;
    //   setAuth({ user, isAdmin, accessToken });
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No server response");
    //   } else if (err.response?.satus === 400) {
    //     setErrMsg("Missing name or password");
    //   } else if (err.response?.satus === 401) {
    //     setErrMsg("Unauthorized");
    //   } else {
    //     setErrMsg("Login Failed");
    //   }
    //   // errRef.current.focus();
    // }
  };

  function googleAuth() {
    window.location.href = `http://localhost:5000/users/google`;
  }

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
        </section>
      ) : (
        <MUi.Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight={"100vh"}
          margin="0"
        >
          <MUi.Paper elevation={3} style={paperStyle}>
            <MUi.Grid align="center">
              <MUi.Avatar>
                <LockOutlined />
              </MUi.Avatar>
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <MUi.FormControl variant="standard" fullWidth>
                  <MUi.InputLabel>Email</MUi.InputLabel>
                  <MUi.Input
                    id="email"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    // ref={userRef}
                  />
                </MUi.FormControl>

                <MUi.FormControl variant="standard" fullWidth>
                  <MUi.InputLabel>Password</MUi.InputLabel>
                  <MUi.Input
                    id="password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </MUi.FormControl>

                <p ref={errRef}>{errMsg}</p>

                <MUi.Button
                  variant="contained"
                  type="submit"
                  sx={{
                    background: "#ff5151",
                    color: "white",
                    margin: "2em 0",
                  }}
                  fullWidth
                >
                  Login
                </MUi.Button>
                <MUi.Button
                  onClick={googleAuth}
                  variant="contained"
                  type="button"
                  sx={{ background: "", color: "white", margin: "1em 0" }}
                  fullWidth
                >
                  {" "}
                  <Google /> Login with Google
                </MUi.Button>
                <MUi.Typography>
                  Don't have an account? <Link to={"/signup"}>Sign up</Link>
                </MUi.Typography>
              </form>
            </MUi.Grid>
          </MUi.Paper>
        </MUi.Grid>
      )}
    </>
  );
}

export default Login;
