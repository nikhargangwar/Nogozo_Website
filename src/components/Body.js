import React from 'react'
import './Body.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import StandardBox from './StandardBox';
import NovelBox from './NovelBox';
import FeaturedNovelBox from './FeaturedNovelBox';
import Latest from './Latest';

function Body() {

    const [standard, setStandard] = useState([1, 3, 6, 7, 8, 9, 10, 5, 34, 2]);
    const [novels, setNovels] = useState([2, 3, 2, 2]);
    const [featuredNovels, setFeaturedNovels] = useState([5, 6, 3, 2, 2, 24, 2])
    const [latests, setLatests] = useState([5, 6, 3, 2, 2, 24, 2])


    return (
        <div className="body">
            <div className="body_container">


                <div className="Standard_container">

                    {standard.map(std => (
                        <div className="standard_container_Box">

                            <StandardBox std={std} />
                        </div>
                    ))
                    }
                </div>

                <h2> Novels For You</h2>

                <div className="novel_container">

                    {novels.map(novel => (
                        <div className="novel_container_Box">

                            <NovelBox novel={novel} />
                        </div>
                    ))
                    }
                </div>

                <h2>Featured novel</h2>

                <div className="FeaturedNovel_container">

                    {featuredNovels.map(feauredNovel => (
                        <div className="FeaturedNovel_container_Box">

                            <FeaturedNovelBox feauredNovel={feauredNovel} />
                        </div>
                    ))
                    }
                </div>

                <h2>Latest novel Arrival</h2>

                <div className="latest_container">

                    {latests.map(latest => (
                        <div className="latests_container_Box">

                            <Latest latest={latest} />
                        </div>
                    ))
                    }
                </div>

            </div>

            <div className="footer">
                Thank you !!
            </div>

        </div>

    )
}

export default Body
