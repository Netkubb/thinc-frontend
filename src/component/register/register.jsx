import React from "react";
import { Box } from "@mui/material";
import RegisterForm from "./registerform";

export default function Register() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "10" }}>
      <RegisterForm></RegisterForm>
    </Box>
  );
}
