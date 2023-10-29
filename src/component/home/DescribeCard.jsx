import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
//minWidth: 275
export default function DescribeCard() {
    return (
        <Card sx={{ minWidth: 275, width: '98vw', height: '70vh', marginX: '1vw', marginTop: '2vh', display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: "#1C1C1C", borderRadius: '45px', color: "white" }}>
            <CardContent>

                <Typography sx={{ fontSize: 40 }} color="whitesmoke" gutterBottom>
                    Name : xxx yyy
                </Typography>
                <Typography sx={{ fontSize: 40 }} color="whitesmoke" gutterBottom>
                    Position : xxx
                </Typography>
                {/* <Typography sx={{ fontSize: 30 ,textAlign: 'left'}} color="whitesmoke" gutterBottom>
                    About BokBok
                </Typography><Typography sx={{ fontSize: 20 ,textAlign: 'left'}} color="whitesmoke" gutterBottom>
                    xxxxxxxx xxxxxxxx
                </Typography> */}
                <Box style={{ position: 'absolute', bottom: 250, left: 40, textAlign: 'left' }}>
                    <Typography sx={{ fontSize: 30 }} color="whitesmoke" gutterBottom>
                        About BokBok
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} color="whitesmoke" gutterBottom>
                        xxxxxxxx xxxxxxxx
                    </Typography>
                </Box>

            </CardContent>
           
            <Box
                component="img"
                sx={{
                    height: '85%',
                    borderRadius: '5px'
                }}
                alt="The house from the offer."
                // src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                src = "./logo.png"
            />
        </Card >
    );
}