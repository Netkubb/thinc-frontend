import React, { useEffect } from "react";
import ButtonInFeed from "./ButtonInFeed";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";
import getPosts from "../../api/postAPI/getPosts";

function Feed() {
  const [index, setIndex] = React.useState(0);
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPosts();
      setPosts(result);
      console.log(result);
    };
    fetchData();
  }, []);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <ButtonInFeed
        idx={index}
        controlidx={(x) => setIndex(x)}
        sizearr={posts.length}
      />
      <VideoCard
        idx={index}
        arr={posts}
        sizearr={posts.length}
        controlx={(x) => setIndex(x)}
      />
    </Box>
  );
}

export default Feed;
