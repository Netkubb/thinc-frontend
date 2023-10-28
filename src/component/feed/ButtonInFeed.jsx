import { Box, Button } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function ButtonInFeed() {
    const uploadHandler = () => {
        window.location.href = "/upload";
    }
    return (
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
            <Button onClick={uploadHandler} variant="contained" sx={{ height: '60px', width: '150px', position: 'absolute', top: '20vh', left: "100px", backgroundColor: "#A04C84", color: "#FFFFFF" }}>Upload</Button>
            <Button variant="contained" sx={{ height: '60px', width: '150px', position: 'absolute', bottom: '10vh', right: "150px", backgroundColor: "#FFFEAD", color: "#212146" }}>Donate</Button>
            <Button variant="contained" sx={{ height: '60px', width: '60px', position: 'absolute', bottom: '45vh', right: "195px", borderRadius: '30px', backgroundColor: "#FFFFFF", color: "#212146" }}><ArrowDownwardIcon /></Button>
            <Button variant="contained" sx={{ height: '60px', width: '60px', position: 'absolute', bottom: '55vh', right: "195px", borderRadius: '30px', backgroundColor: "#FFFFFF", color: "#212146" }}><ArrowUpwardIcon /></Button>
        </Box >
    );
}

