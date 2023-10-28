import { Box, Button } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Feed() {
  // TODO add feed page
  const uploadHandler = () => {
    window.location.href = "/upload";
  }

  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
      <Button onClick={uploadHandler} variant="contained" sx={{ height: '60px', width: '150px', position: 'absolute', bottom: '10vh', left: "150px", backgroundColor: "#A04C84", color: "#FFFFFF" }}>Upload</Button>
      <Button onClick={uploadHandler} variant="contained" sx={{ height: '60px', width: '150px', position: 'absolute', bottom: '10vh', right: "150px", backgroundColor: "#FFFEAD", color: "#212146" }}>Donate</Button>
      <Button onClick={uploadHandler} variant="contained" sx={{ height: '60px', width: '60px', position: 'absolute', bottom: '45vh', right: "195px", borderRadius: '30px', backgroundColor: "#FFFFFF", color: "#212146" }}><ArrowDownwardIcon /></Button>
      <Button onClick={uploadHandler} variant="contained" sx={{ height: '60px', width: '60px', position: 'absolute', bottom: '55vh', right: "195px", borderRadius: '30px', backgroundColor: "#FFFFFF", color: "#212146" }}><ArrowUpwardIcon /></Button>
    </Box >
  );
}

export default Feed;
