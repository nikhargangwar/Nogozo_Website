import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './Latest.css'
function Latest() {
    return (
        <div className="latest">
            <Card sx={{ maxWidth: 200, m: 1 }}>
                <CardMedia
                    component="img"
                    height="180"
                    width="150"
                    image="C:\nikhar\Yash\projects\Nogozo_Website\nogozo\public\Images\KILvnQ.jpg"
                    alt="green iguana"
                />
                <h5>Class IX</h5>
            </Card>
            
        </div>
    )
}

export default Latest
