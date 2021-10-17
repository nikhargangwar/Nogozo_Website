import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import './StandardBox.css'
import Img from './twelth.jpg'
function StandardBox({ standard }) {

    return (
        <div className="StandardBox">
            <Card sx={{ maxWidth: 200, m: 1 }}>
                <CardMedia
                    component="img"
                    height="140"
                    width="120"
                    image={Img}
                    alt="green iguana"
                />
            </Card>
            <h5>Class IX</h5>
        </div>
    )
}

export default StandardBox
