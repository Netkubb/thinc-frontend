import { Box, Button, TextField, Typography } from "@mui/material";
import { React, useState } from "react";
import uploadVideo from "../../api/postAPI/uploadVideo";
import createPost from "../../api/postAPI/createPost";
import UploadIcon from "@mui/icons-material/Upload";

export default function UploadDetail() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file); // Log the file directly
  };

  const uploadHandler = async () => {
    try {
      const result = await uploadVideo(selectedFile);
      const res = await createPost(result.url, caption);
      console.log(res);
      document.location.href = "/feed";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ marginBottom: "100px" }}>
      <Box
        sx={{
          height: "70vh",
          width: "65vw",
          backgroundColor: "white",
          marginTop: "100px",
          borderRadius: "16px",
          overflow: "hidden",
          paddingY: "30px",
        }}
      >
        <Box
          sx={{
            py: 2,
            lineHeight: "30px",
            height: "30%",
            marginBottom: "50px",
          }}
        >
          <Typography
            variant="h9"
            component="div"
            color={"black"}
            align="left"
            marginLeft={"5%"}
            fontWeight={"bold"}
            fontSize={"2em"}
          >
            BOK BOK upload:{" "}
          </Typography>
          <Button
            component="label"
            variant="contained"
            sx={{
              backgroundColor: "#DFDAE1",
              "&:hover": {
                backgroundColor: "#D55CFF",
              },
              marginTop: "50px",
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginX: "auto",
            }}
          >
            <UploadIcon
              sx={{
                height: "80%",
                width: "50%",
                color: "black",
              }}
            />
            <input type="file" name="file" hidden onChange={handleFileChange} />
          </Button>
        </Box>
        <Box sx={{ width: "100%", mb: 2, marginTop: "100px" }}>
          <Typography
            variant="h9"
            component="div"
            color={"black"}
            align="left"
            marginLeft={"5%"}
            fontWeight={"bold"}
          >
            Video Caption
          </Typography>
          <TextField
            id="standard-basic"
            label="Caption"
            variant="standard"
            multiline
            sx={{ width: "90%", mt: 1 }}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            height: "40px",
            width: "150px",
            backgroundColor: "#A04C84",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#D55CFF",
            },
            borderRadius: "10px",
            marginTop: "80px",
          }}
          onClick={uploadHandler}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
}
