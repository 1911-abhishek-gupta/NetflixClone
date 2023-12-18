import React from 'react';
import "./watch.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {

    const location = useLocation();
    const movie = location.state.movie; 

    return (
        <div className='watch'>
        <Link to="/">
            <div className="back">
                <ArrowBackIcon />
                Home
            </div>
        </Link>
            <video src={movie.trailer}
                className='video'
                autoPlay
                progress = "true"
                controls></video>
        </div>
    )
}

export default Watch