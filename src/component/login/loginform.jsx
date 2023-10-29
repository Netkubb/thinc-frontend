import React, { useState } from "react";
import loginAPI from "../../api/authAPI/loginAPI";
import { Card, Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Cookies from "js-cookie";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const jwtToken = Cookies.get("jwt");

  if (jwtToken) {
    // Parse the JWT token to get the username
    const decodedToken = atob(jwtToken.split(".")[1]);
    const userData = JSON.parse(decodedToken);
    const username = userData.username;

    // You have the username from the JWT token
    console.log("Username:", username);
  } else {
    // The 'jwt' cookie does not exist
    console.log("JWT cookie not found");
  }

  const handleLogin = async () => {
    try {
      const result = await loginAPI(username, password);

      if (result.success) {
        // Redirect to the authenticated page or show a success message
        setMessage("Login successful");
        document.location.href = "/feed";
      } else {
        setMessage("Incorrect username or password");
      }
    } catch (error) {
      setMessage("Incorrect username or password");
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
            SIGN IN
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
          onKeyDown={(e) => {
            if(e.key === 'Enter') {
              handleLogin();
            }
          }}
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
          onClick={handleLogin}
          sx={{
            minWidth: 50,
            width: "70%",
            borderRadius: "20px",
            marginY: "auto",
          }}
        >
          Sign in
        </Button>
      </Box>
      <Box xs={{ height: "5%" }}>
        {message && <Typography color={"black"}>{message}</Typography>}
      </Box>
    </Card>
  );
}
