import { Box, Button, TextField, Typography } from "@mui/material";
import { React, useState } from "react";
import uploadVideo from "../../api/postAPI/uploadVideo";

export default function UploadDetail() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file); // Log the file directly
  };

  const uploadHandler = async () => {
    try {
      const result = await uploadVideo(selectedFile);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          height: "50vh",
          width: "50vw",
          backgroundColor: "white",
          marginTop: "100px",
          borderRadius: "16px",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Box sx={{ py: 2, lineHeight: "30px" }}>
          <Typography
            variant="h9"
            component="div"
            color={"black"}
            align="left"
            marginLeft={"5%"}
            fontWeight={"bold"}
          >
            Choose Video:{" "}
          </Typography>
          <input type="file" name="file" onChange={handleFileChange} />
        </Box>
        <Box sx={{ width: "100%", mb: 2 }}>
          <Typography
            variant="h9"
            component="div"
            color={"black"}
            align="left"
            marginLeft={"5%"}
            fontWeight={"bold"}
          >
            Enter Video Caption
          </Typography>
          <TextField
            id="standard-basic"
            label="Caption"
            variant="standard"
            multiline
            sx={{ width: "90%", mt: 1 }}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          height: "60px",
          width: "150px",
          backgroundColor: "#A04C84",
          color: "#FFFFFF",
          marginTop: "50px",
        }}
        onClick={uploadHandler}
      >
        Upload
      </Button>
    </Box>
  );
}
