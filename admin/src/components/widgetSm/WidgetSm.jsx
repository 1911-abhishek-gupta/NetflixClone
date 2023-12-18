import React, { useEffect, useState } from 'react'
import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "axios";

const WidgetSm = () => {

    const [newUsers,setNewUsers] = useState([]);

    useEffect(()=>{
        const getNewUsers = async () => {

            try{
                const res = await axios.get("/users?new=true",{headers:{
                    token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                }});

                setNewUsers(res.data);

            }catch(err){
                console.log(err);
            }
        }

        getNewUsers();
    },[])


  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New join Members</span>
        <ul className="widgetSMList">
        {
            newUsers.map((user)=>(
            <li className="widgetSMListItem">
                <img src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            ))
        }

        </ul>
    </div>
  )
}

export default WidgetSm