import React from "react";
import ButtonInFeed from "./ButtonInFeed";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";

const arr = ['0', '1', '2', '3'];
var arrSize = arr.length;
const [index, setIndex] = React.useState(0);

function Feed() {
  // TODO add feed page
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <ButtonInFeed idx={index} controlidx={setIndex} sizearr={arrSize} />
      <VideoCard idx={index} arr={arr} />

    </Box>
  );
}

export default Feed;
