import React from "react";
import { Box } from "@mui/material";
import LoginForm from "./loginform";

export default function Login() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10" }}>
      <LoginForm></LoginForm>
    </Box>
  );
}
