import * as React from 'react';
import { Avatar, Box } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function OurIcon() {
    return (
        <Box textAlign='center' justifyContent={'space-around'} display={'flex'} flexDirection={'row'} gap={2} height={'calc(27vh - 68.5px)'} alignItems={'end'} marginBottom={'1vh'}>
            <Box display={'flex'} alignItems={'center'} marginLeft={0} flexDirection={'column'} gap={0.5}>
                <Avatar >H</Avatar>

            </Box >
            <Box display={'flex'} alignItems={'center'} marginLeft={0} flexDirection={'column'} gap={0.5}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>

            </Box>
            <Box display={'flex'} alignItems={'center'} marginLeft={0} flexDirection={'column'} gap={0.5}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>

            </Box>
            <Box display={'flex'} alignItems={'center'} marginLeft={0} flexDirection={'column'} gap={0.5}>
                <Avatar >H</Avatar>

            </Box >
            <Box display={'flex'} alignItems={'center'} marginLeft={0} flexDirection={'column'} gap={0.5}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>

            </Box>
            <Box display={'flex'} alignItems={'center'} marginLeft={0} flexDirection={'column'} gap={0.5}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>

            </Box>
        </Box>
    );
}