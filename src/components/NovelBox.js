import React from 'react'
import './NovelBox.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Img from '../Images/novel3.jpg'

function NovelBox() {
    return (
        <div className="novelBox">
            <Card sx={{ maxWidth: 280, m: 1 }}>
                <CardMedia
                    component="img"
                    height="160"
                    width="600"
                   image={Img} 
                    alt="green iguana"
                />
            </Card>

        </div>
    )
}

export default NovelBox