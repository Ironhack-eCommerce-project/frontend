import { SERVER_ORIGIN } from "../../consts.js";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
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

const defaultUser = {
  email: "",
  password: "",
};

const paperStyle = {
  padding: 20,
  minHeight: "40vh",
  width: 300,
};

function Login() {
  const [user, setUser] = useState(defaultUser);
  const navigate = useNavigate();
  const { loginUser, adminUser } = useContext(UserContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      loginUser(foundUser);
      navigate("/profile");
    }
  });

  const handleChange = (e) => {
    setUser((old) => {
      let newValue = e.target.value;
      return { ...old, [e.target.name]: newValue };
    });
  };

  const sendToServer = async () => {
    try {
      const result = await axios.post(SERVER_ORIGIN + "/users/login", JSON.stringify(user), {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      const data = await result.data;
      loginUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      if (!data.isAdmin) {
        adminUser(false);
      } else {
        adminUser(true);
      }
      navigate("/profile", { replace: true });
    } catch (error) {
      console.log(error);
    }
    // setUser(defaultUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendToServer();
  };

  function googleAuth() {
    window.location.href = SERVER_ORIGIN + "/users/google";
  }

  return (
    <>
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
                  onChange={handleChange}
                  value={user.email}
                />
              </MUi.FormControl>

              <MUi.FormControl variant="standard" fullWidth>
                <MUi.InputLabel>Password</MUi.InputLabel>
                <MUi.Input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={user.password}
                />
              </MUi.FormControl>

              <MUi.Button
                variant="contained"
                type="submit"
                sx={{
                  background: "#ff5151",
                  color: "white",
                  margin: "1em 0",
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
                <Google /> Login with Google
              </MUi.Button>
              <MUi.Typography>
                Don't have an account? <Link to={"/signup"}>Signup</Link>
              </MUi.Typography>
            </form>
          </MUi.Grid>
        </MUi.Paper>
      </MUi.Grid>
    </>
  );
}

export default Login;
