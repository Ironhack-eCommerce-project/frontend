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

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
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
    //check Username + PW
    //save User in DB
    //log User in
    setUser(defaultUser);
  }

  function checkIfEmailUnique(username) {
    console.log("check DB");
  }

  function validEmail(str) {
    return /\S+@\S+\.\S+/.test(str);
  }

  //PW should have at least 6 characters, incl a number, one uppercase letter and one lowercase
  function checkPasswordStrength(str) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(str);
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 300,
    margin: "10px auto",
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
          <h2>Signup</h2>
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
              Already have an account? <Link to={"/login"}>Login</Link>
            </Typography>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Signup;
