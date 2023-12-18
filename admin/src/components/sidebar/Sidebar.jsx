import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReportIcon from '@mui/icons-material/Report';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link } from 'react-router-dom';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ListIcon from '@mui/icons-material/List';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'> DashBoard </h3>
                <ul className="sidebarList">
                <Link to="/" className='link'>
                    <li className='sidebarListItem active'> 
                        <LineStyleIcon className='sidebarIcon'/>
                        Home
                    </li>
                </Link>
                    <li className='sidebarListItem'> 
                        <TimelineIcon className='sidebarIcon'/>
                        Analytic
                    </li>  <li className='sidebarListItem'> 
                        <TrendingUpIcon className='sidebarIcon'/>
                        sales
                    </li>  
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'> Quick Menu </h3>
                <ul className="sidebarList">
                <Link to="/users" className='link'>
                    <li className='sidebarListItem'> 
                        <PermIdentityIcon className='sidebarIcon'/>
                        Users
                    </li>
                </Link>
                <Link to="/movies" className='link'>
                    <li className='sidebarListItem'> 
                        <PlayCircleOutlineIcon className='sidebarIcon'/>
                        Movies
                    </li>
                </Link>
                <Link to="/lists" className='link'>
                      <li className='sidebarListItem'> 
                        <ListIcon className='sidebarIcon'/>
                        Lists
                    </li>  
                </Link>
                    <li className='sidebarListItem'> 
                        <BarChartIcon className='sidebarIcon'/>
                        Reports
                    </li>  
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'> Notifications </h3>
                <ul className="sidebarList">
                    <li className='sidebarListItem'> 
                        <MailOutlineIcon className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className='sidebarListItem'> 
                        <DynamicFeedIcon className='sidebarIcon'/>
                        Feedback
                    </li>  <li className='sidebarListItem'> 
                        <ChatBubbleOutlineIcon className='sidebarIcon'/>
                        Messages
                    </li>  
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'> Staff </h3>
                <ul className="sidebarList">
                    <li className='sidebarListItem'> 
                        <WorkOutlineIcon className='sidebarIcon'/>
                        manage
                    </li>
                    <li className='sidebarListItem'> 
                        <TimelineIcon className='sidebarIcon'/>
                        Analytics
                    </li>  <li className='sidebarListItem'> 
                        <ReportIcon className='sidebarIcon'/>
                        Reports
                    </li>  
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar