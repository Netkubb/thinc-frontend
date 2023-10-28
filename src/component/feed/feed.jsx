import React from "react";
import ButtonInFeed from "./ButtonInFeed";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";

function Feed() {
  // TODO add feed page
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <ButtonInFeed />
      <VideoCard></VideoCard>
    </Box>
  );
}

export default Feed;
