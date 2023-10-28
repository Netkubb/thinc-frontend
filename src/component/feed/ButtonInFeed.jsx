import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ButtonInFeed() {
    const uploadHandler = () => {
        window.location.href = "/upload";
    }

    const [open, setOpen] = React.useState(false);

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
        setConfirm(false);
    };

    return (
        <div>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
                <Button onClick={uploadHandler} variant="contained" sx={{ height: '60px', width: '150px', position: 'absolute', top: '20vh', left: "100px", backgroundColor: "#A04C84", color: "#FFFFFF" }}>Upload</Button>
                <Button variant="contained" sx={{ height: '60px', width: '150px', position: 'absolute', bottom: '10vh', right: "150px", backgroundColor: "#FFFEAD", color: "#212146" }} onClick={handleClickOpen}>Donate</Button>
                <Button variant="contained" sx={{ height: '60px', width: '60px', position: 'absolute', bottom: '45vh', right: "195px", borderRadius: '30px', backgroundColor: "#FFFFFF", color: "#212146" }}><ArrowDownwardIcon /></Button>
                <Button variant="contained" sx={{ height: '60px', width: '60px', position: 'absolute', bottom: '55vh', right: "195px", borderRadius: '30px', backgroundColor: "#FFFFFF", color: "#212146" }}><ArrowUpwardIcon /></Button>
            </Box >
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
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={(e) => {
                        handleClose(e);
                        handleClickConfirm(e);
                    }
                    }>Donate</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={comfirm} onClose={handleCloseConfirm}>
                <DialogTitle>Enter Number of Bulbs</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you to donate {"xxx"}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm}>Cancel</Button>
                    <Button onClick={handleCloseConfirm}>Sure</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
