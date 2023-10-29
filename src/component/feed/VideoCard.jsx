/* eslint-disable react/prop-types */
import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import SendIcon from "@mui/icons-material/Send";
import getPost from "../../api/postAPI/getPost";
import Cookies from "js-cookie";
import addComment from "../../api/postAPI/addComment";

export default function VideoCard({ idx, arr }) {
  const [videoURL, setVideoURL] = React.useState("");
  const [caption, setCaption] = React.useState("");
  const [like, setLikes] = React.useState(0);
  const [comments, setComments] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [commentContent, setCommentContent] = React.useState("");

  //console.log({ idx } + { arr });
  const [showComment, setShowComment] = React.useState(false);
  const handleCommentClick = () => {
    setShowComment(!showComment);
  };

  const handleComment = async () => {
    const jwtToken = Cookies.get("jwt");
    const decodedToken = atob(jwtToken.split(".")[1]);
    const userData = JSON.parse(decodedToken);
    const username = userData.username;

    try {
      const result = await addComment(arr[idx].id, username, commentContent);
      console.log(result.body);
      console.log(comments);
      setComments([...comments, result.body]);
      setCommentContent("");
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (arr.length === 0) return;
    if (!arr[idx]) return;
    const fetchData = async () => {
      const result = await getPost(arr[idx].id);
      console.log(result);
      setVideoURL(result.videoURL);
      setCaption(result.caption);
      setLikes(result.like);
      setComments(JSON.parse(result.comment || "[]"));
      setUsername(result.username);
    };
    fetchData();
  }, [arr, idx]);

  return (
    <Card
      sx={{
        width: "33vw",
        height: "87vh",
        marginX: "1vw",
        marginTop: "2vh",
        backgroundColor: "white",
        borderRadius: "10px",
        color: "white",
      }}
    >
      <CardContent>
        <Typography
          variant="inherit"
          component="div"
          color={"black"}
          align="left"
          fontWeight={"bold"}
        >
          {username}
        </Typography>
        <br></br>
        <Box sx={{ height: "100px" }}>
          <Typography
            variant="caption"
            component="div"
            color={"black"}
            align="left"
            sx={{ wordBreak: "break-word" }}
          >
            {caption}
          </Typography>
        </Box>
        <Box
          sx={{
            height: "320px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <CardMedia
            component={"video"}
            src={videoURL}
            autoPlay
            controls
            sx={{ maxHeight: "300px" }}
          ></CardMedia>
        </Box>
        <Box
          display={"flex"}
          width={"100%"}
          height={"200px"}
          flexDirection={"column-reverse"}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              px: 5,
              paddingBottom: 3,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              onClick={handleCommentClick}
            >
              <CommentIcon sx={{ color: "black" }} />
              <Typography
                variant="h9"
                component="div"
                color={"black"}
                align="left"
              >
                {comments.length}
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <FavoriteIcon sx={{ color: "black" }} />
              <Typography
                variant="inherit"
                component="div"
                color={"black"}
                align="left"
              >
                {like}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
      {showComment ? (
        <Box>
          <Box
            sx={{
              backgroundColor: "white",
              height: "60vh",
              width: "25vw",
              position: "absolute",
              left: "60px",
              bottom: "60px",
              borderRadius: "10px",
              p: 2,
              overflow: "hidden",
              overflowY: "scroll",
            }}
          >
            <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
              <DisabledByDefaultIcon
                sx={{ color: "black" }}
                onClick={handleCommentClick}
              />
            </Box>
            <Box>
              {comments.map((comment) => (
                <>
                  <Divider sx={{ borderBottomWidth: "1px", my: 1 }} />
                  <Typography
                    variant="subtitle1"
                    component="div"
                    color={"black"}
                    align="left"
                    fontWeight={"bold"}
                  >
                    {comment.username}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    color={"black"}
                    align="left"
                    sx={{ wordBreak: "break-word" }}
                  >
                    {comment.content}
                  </Typography>
                </>
              ))}
              <Divider sx={{ borderBottomWidth: "1px", my: 1 }} />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              marginY={"10px"}
            >
              <TextField
                id="filled-basic"
                label="Add Comment"
                variant="filled"
                size="small"
                sx={{ width: "80%" }}
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
              />

              <SendIcon sx={{ color: "black" }} onClick={handleComment} />
            </Box>
          </Box>
        </Box>
      ) : null}
    </Card>
  );
}
