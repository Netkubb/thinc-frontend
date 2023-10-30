import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { getLight, setGlobalLight } from "../../utils/user";

// eslint-disable-next-line react/prop-types
export default function ButtonInFeed({ idx, controlidx, sizearr }) {
  const uploadHandler = () => {
    window.location.href = "/upload";
  };

  const [open, setOpen] = React.useState(false);
  const [light, setLight] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [comfirm, setConfirm] = React.useState(false);

  const handleClickConfirm = () => {
    setConfirm(true);
  };

  const handleCloseConfirm = () => {
    setGlobalLight(getLight() - light);
    setConfirm(false);
  };

  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
      >
        <Button
          onClick={uploadHandler}
          variant="contained"
          sx={{
            height: "60px",
            width: "150px",
            position: "absolute",
            top: "20vh",
            left: "100px",
            backgroundColor: "#A04C84",
            color: "#FFFFFF",
          }}
        >
          Upload
        </Button>
        <Button
          variant="contained"
          sx={{
            height: "60px",
            width: "150px",
            position: "absolute",
            bottom: "10vh",
            right: "150px",
            backgroundColor: "#FFFEAD",
            color: "#212146",
          }}
          onClick={handleClickOpen}
        >
          Donate
        </Button>
        <Button
          variant="contained"
          sx={{
            height: "60px",
            width: "60px",
            position: "absolute",
            bottom: "45vh",
            right: "195px",
            borderRadius: "30px",
            backgroundColor: "#FFFFFF",
            color: "#212146",
          }}
          onClick={() => {
            controlidx((idx + 1) % sizearr);
            console.log(idx);
          }}
        >
          <ArrowDownwardIcon />
        </Button>
        <Button
          variant="contained"
          sx={{
            height: "60px",
            width: "60px",
            position: "absolute",
            bottom: "55vh",
            right: "195px",
            borderRadius: "30px",
            backgroundColor: "#FFFFFF",
            color: "#212146",
          }}
          onClick={() => {
            controlidx((idx - 1 + sizearr) % sizearr);
            console.log(idx);
          }}
        >
          <ArrowUpwardIcon />
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Number of Bulbs</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Bulbs for Donation"
            type="number"
            fullWidth
            variant="filled"
            onChange={(e) => setLight(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={(e) => {
              handleClose(e);
              handleClickConfirm(e);
            }}
          >
            Donate
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={comfirm} onClose={handleCloseConfirm}>
        <DialogTitle>Comfirm Donation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure to donate {light} bulbs ?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm}>Cancel</Button>
          <Button onClick={handleCloseConfirm}>Sure</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
