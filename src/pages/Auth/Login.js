import { useState } from "react";
import {
  Avatar,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import { LockOutlined, Google } from "@mui/icons-material";
// import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";

function Login() {
  const defaultUser = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(defaultUser);

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
  function handleSubmit(event) {
    console.log("CHECK DB AND LOG IN");
  }

  function googleAuth() {
    window.location.href = `http://localhost:5000/users/google`;
  }

  return (
    <Grid
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={"100vh"}
      margin="0"
    >
      <Paper elevation={3} style={paperStyle}>
        <Grid align="center">
          <Avatar>
            <LockOutlined />
          </Avatar>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <FormControl variant="standard" fullWidth>
              <InputLabel>Email</InputLabel>
              <Input
                id="email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel>Password</InputLabel>
              <Input
                id="password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              sx={{ background: "#ff5151", color: "white", margin: "2em 0" }}
              fullWidth
            >
              Login
            </Button>
            <Button
              onClick={googleAuth}
              variant="contained"
              type="button"
              sx={{ background: "", color: "white", margin: "1em 0" }}
              fullWidth
            >
              {" "}
              <Google /> Login with Google
            </Button>
            <Typography>
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </Typography>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Login;
