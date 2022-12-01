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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
function Login() {
  const defaultUser = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(defaultUser);

  function handleChange(event) {
    setUser((old) => {
      let newValue = event.target.value;
      return { ...old, [event.target.name]: newValue };
    });
  }
  function handleSubmit(event) {
    console.log("CHECK DB AND LOG IN");
  }

  const paperStyle = {
    padding: 20,
    minHeight: "40vh",
    width: 300,
  };

  return (
    <Grid
      component={"container"}
      spacing={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={"100vh"}
      margin="0"
    >
      <Paper elevation={3} style={paperStyle}>
        <Grid align="center">
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <FormControl variant="standard" fullWidth>
              <InputLabel>Email</InputLabel>
              <Input
                id="component-simple"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel>Password</InputLabel>
              <Input
                id="component-simple"
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

// <label>
//   E-Mail:
//   <input
//     type="email"
//     name="email"
//     value={user.email}
//     onChange={handleChange}
//   />
// </label>
// <br />
// <label>
//   Password:
//   <input
//     type="password"
//     name="password"
//     value={user.password}
//     onChange={handleChange}
//   />
// </label>
// <br />
// <button type="submit">Log in</button>
