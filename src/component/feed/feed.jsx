import React from "react";
import ButtonInFeed from "./ButtonInFeed";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";

const arr = ["0", "1", "2", "3"];
const arrSize = arr.length;

function Feed() {
  const [index, setIndex] = React.useState(0);
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <ButtonInFeed
        idx={index}
        controlidx={(x) => setIndex(x)}
        sizearr={arrSize}
      />
      <VideoCard idx={index} arr={arr} />
    </Box>
  );
}

export default Feed;
