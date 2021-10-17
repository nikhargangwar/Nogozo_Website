import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './Latest.css'
import Img from '../Images/latest.png'
function Latest() {
    return (
        <div className="latest">
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

export default Latest
