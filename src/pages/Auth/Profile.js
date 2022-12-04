import {
  Avatar,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/users/login/success",
        { withCredentials: true }
      );
      setUser(data.user._json);
    };
    getUser();
  }, []);

  function logout() {
    window.location.href = `http://localhost:5000/users/logout`;
  }

  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: "70vw",
    margin: "10px auto",
  };

  return (
    <Grid
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={"100%"}
      margin="0"
    >
      <Paper elevation={3} style={paperStyle}>
        <Grid align="center">
          <Avatar alt="Profile Picture" src={user.picture} />
          <h2>Profile</h2>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Email</InputLabel>
            <Input
              id="email"
              type="email"
              name="email"
              value={user.email}
              disabled
            />
          </FormControl>

          <Button
            onClick={logout}
            variant="contained"
            type="button"
            sx={{ background: "#ff5151", color: "white", margin: "2em 0" }}
            fullWidth
          >
            Logout
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Profile;
