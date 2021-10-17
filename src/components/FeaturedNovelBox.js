import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './FeaturedNovelBox.css'
import Img from '../Images/book.jpg'

function FeaturedNovelBox() {
    return (
        <div className="FeaturedNovelBox">
            <Card elevation={3} sx={{ maxWidth: 200, m: 1 }}>
                <CardMedia
                    component="img"
                    height="180"
                    width="150"
                    image={Img} 
                    alt="green iguana"
                />
                <h5>Class IX</h5>
            </Card>
            
        </div>
    )
}

export default FeaturedNovelBox
