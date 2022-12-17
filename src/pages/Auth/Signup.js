import { SERVER_ORIGIN } from "../../consts.js";
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

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const defaultUser = {
  email: "",
  password: "",
};

function Signup() {
  const [user, setUser] = useState(defaultUser);
  const navigate = useNavigate();

  function handleChange(e) {
    setUser((old) => {
      let newValue = e.target.value;
      return { ...old, [e.target.name]: newValue };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user.email);
    try {
      const resp = await axios.post(SERVER_ORIGIN + "/users/signup", user, {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      console.log(resp.data);
      navigate("/profile");
    } catch (error) {
      console.log(error.resp);
    }
  };

  function googleAuth() {
    window.location.href = `http://localhost:5000/users/google`;
  }

  // function checkIfEmailUnique(username) {
  //   console.log("check DB");
  // }

  // function validEmail(str) {
  //   return /\S+@\S+\.\S+/.test(str);
  // }

  //PW should have at least 6 characters, incl a number, one uppercase letter and one lowercase
  // function checkPasswordStrength(str) {
  //   return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(str);
  // }

  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 300,
  };

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
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <FormControl variant="standard" fullWidth>
              <InputLabel>Email</InputLabel>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel>Password</InputLabel>
              <Input
                id="passsword"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              sx={{ background: "#ff5151", color: "white", margin: "1em 0" }}
              fullWidth
            >
              Signup
            </Button>
            <Button
              onClick={googleAuth}
              variant="contained"
              type="button"
              sx={{ background: "", color: "white", margin: "1em 0" }}
              fullWidth
            >
              <Google /> Sugnup with Google
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
