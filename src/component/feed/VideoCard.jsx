import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Divider } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

export default function VideoCard() {
    const [showComment, setShowComment] = React.useState(false);
    const handleCommentClick = () => {
        setShowComment(!showComment)

    }
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
                <Box display={'flex'} width={'100%'} height={'200px'} flexDirection={'column-reverse'}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', px: 5, paddingBottom: 3 }} >
                        <Box display={'flex'} alignItems={'center'} flexDirection={'column'} onClick={handleCommentClick}>
                            <CommentIcon sx={{ color: 'black' }} />
                            <Typography variant='h9' component="div" color={'black'} align='left'>
                                {"0"}
                            </Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                            <FavoriteIcon sx={{ color: 'black' }} />
                            <Typography variant='inherit' component="div" color={'black'} align='left'>
                                {"0"}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
            {showComment ?
                <Box>
                    <Box sx={{ backgroundColor: "white", height: '60vh', width: '25vw', position: "absolute", left: "60px", bottom: '60px', borderRadius: '10px', p: 2 }}>
                        <Box sx={{ width: "100%", display: 'flex', justifyContent: 'end' }}>
                            <DisabledByDefaultIcon sx={{ color: 'black' }} onClick={handleCommentClick} />
                        </Box>
                        <Typography variant='subtitle1' component="div" color={'black'} align='left' fontWeight={'bold'}>
                            {"Name"}
                        </Typography>
                        <Typography variant="caption" component="div" color={'black'} align='left' sx={{ wordBreak: 'break-word' }}>
                            {'Caption'}
                        </Typography>
                        <Divider sx={{ borderBottomWidth: '1px', my: 1 }} />
                    </Box>
                </Box>
                : null}
        </Card >
    );
}