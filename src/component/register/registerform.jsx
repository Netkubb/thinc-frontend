import React, { useState } from "react";
import registerAPI from "../../api/authAPI/registerAPI";
import { Card, Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Cookies from "js-cookie";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const jwtToken = Cookies.get("jwt");

  if (jwtToken) {
    // The 'jwt' cookie exists, and jwtToken contains its value
    console.log("Cookie found:", jwtToken);
  } else {
    // The 'jwt' cookie does not exist
    console.log("Cookie not found");
  }

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setMessage("Password and confirm password are not the same");
      return;
    }
    if (password.length === 0 || username.length === 0) {
      setMessage("Username or password cannot be empty");
      return;
    }
    try {
      const result = await registerAPI(username, password);

      if (result.ok) {
        // Redirect to the login page or show a success message
        setMessage("Register successful");
        document.location.href = "/login";
      } else {
        setMessage("Username already exists");
        console.log(result);
      }
    } catch (error) {
      setMessage("Username already exists");
      console.error(error);
    }
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        width: "30vw",
        height: "75vh",
        display: "flex",
        marginTop: "50px",
        borderRadius: "16px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        color: "white",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "15%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 233,
            width: "100%",
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="/logo.png"
        />
      </Box>
      <Box>
        <Box sx={{ height: "20%" }}>
          <Typography
            sx={{
              fontSize: "2em",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
            color="black"
          >
            REGISTER
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <TextField
          id="outlined-basic"
          label="username"
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ width: "70%", marginY: "20px" }}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="password"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText="Dont share password with anyone"
          sx={{ width: "70%" }}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="confirm password"
          variant="standard"
          value={confirmPassword}
          onChange={(e) => setConfirm(e.target.value)}
          sx={{ width: "70%" }}
        />
      </Box>

      <Box
        sx={{
          minHeight: "20%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={handleRegister}
          sx={{
            minWidth: 50,
            width: "70%",
            borderRadius: "20px",
            marginY: "auto",
          }}
        >
          Register
        </Button>
      </Box>
      <Box xs={{ height: "5%" }}>
        {message && <Typography color={"black"}>{message}</Typography>}
      </Box>
    </Card>
  );
}
