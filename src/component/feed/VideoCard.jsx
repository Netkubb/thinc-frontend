import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function VideoCard() {
    return (
        <Card sx={{ width: '33vw', height: '87vh', marginX: '1vw', marginTop: '2vh', backgroundColor: "white", borderRadius: '10px', color: "white" }}>
            <CardContent>
                <Typography variant='inherit' component="div" color={'black'} align='left' fontWeight={'bold'}>
                    {"Name"}
                </Typography>
                <br></br>
                <Box sx={{ height: '100px' }}>
                    <Typography variant="caption" component="div" color={'black'} align='left' sx={{ wordBreak: 'break-word' }}>
                        {'Caption'}
                    </Typography>
                </Box>
                <Box sx={{ height: '320px', display: 'flex', alignItems: 'center', backgroundColor: "black" }}>
                    <CardMedia component={'video'} src='/verti.mp4' autoPlay controls
                        sx={{ maxHeight: '300px' }}></CardMedia>
                </Box>
                <Box display={'flex'} width={'100%'} height={'100%'} flexDirection={'row-reverse'}>
                    <Typography variant='inherit' component="div" color={'black'} align='left'>
                        {"Name"}
                    </Typography>
                </Box>
            </CardContent>
        </Card >
    );
}