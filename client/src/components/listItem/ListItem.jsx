import React, { useEffect, useState } from 'react'
import "./listItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import axios from "axios";
import { Link } from 'react-router-dom';

const ListItem = ({ index,item }) => {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});


  useEffect(() => {

    const getMovie = async () =>{
      try{

        const res = await axios.get("/movies/find/"+item ,{
          headers:{
            token: "Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });

        setMovie(res.data);

      }catch(err){
        console.log(err);
      }
    }

    getMovie();

  },[item])


  return (
    <Link to = "/watch" state={{movie : movie}}>
    <div className='listItem' 
    style={{ left: isHovered && (index * 225 - 50) + (index * 2.5) }}
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)} 
    >
      <img src={movie.img} alt="" />
      {
        isHovered && (<>
          <video src={movie.trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className='icon' />
              <AddIcon className='icon'/>
              <ThumbUpOutlinedIcon className='icon'/>
              <ThumbDownOffAltOutlinedIcon className='icon'/>
            </div>

            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className='limit'>+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>

            <div className="desc">
            {movie.desc}
            </div>

            <div className="genre">{movie.genre}</div>

          </div>
        </>)
      }
    </div>
    </Link>
  )
}

export default ListItem