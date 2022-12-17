import { SERVER_ORIGIN } from "../../consts.js";
import { Button, FormControl, Grid, Input, InputLabel, Paper } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Profile() {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post(SERVER_ORIGIN + "/users/logout", {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      logoutUser();
      navigate("/");
    } catch (error) {
      console.warn(error);
    }
  };

  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: "70vw",
    margin: "10px auto",
  };

  // if (!user) {
  //   navigate("/login");
  //   return null;
  // }
  return (
    <Grid display="flex" alignItems="center" justifyContent="center" minHeight={"100%"} margin="0">
      <Paper elevation={3} style={paperStyle}>
        <Grid align="center">
          {/* <Avatar alt="Profile Picture" src={user.picture} /> */}
          <h2>Profile of {user.name}</h2>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Email</InputLabel>
            <Input id="email" type="email" name="email" value={user.email} disabled />
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
