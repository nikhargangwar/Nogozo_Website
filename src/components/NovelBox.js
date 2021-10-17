import React from 'react'
import './NovelBox.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function NovelBox() {
    return (
        <div className="novelBox">
            <Card sx={{ maxWidth: 280, m: 1 }}>
                <CardMedia
                    component="img"
                    height="160"
                    width="600"
                    image="C:\nikhar\Yash\projects\Nogozo_Website\nogozo\public\Images\KILvnQ.jpg"
                    alt="green iguana"
                />
            </Card>
            
        </div>
    )
}

export default NovelBox
