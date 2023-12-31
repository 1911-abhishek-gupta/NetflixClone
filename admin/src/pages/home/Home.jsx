import React, { useEffect, useMemo, useState } from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import axios from "axios"


const Home = () => {
  
  const MONTHS = useMemo(()=>
  [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],[]
  )

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    

      const getStats = async () => {

        try{
          const res = await axios.get("/users/stats/", {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
          })

          const statsList = res.data.sort(function(a,b){
            return a._id - b._id;
          });

          statsList.map((item)=>setUserStats((prev)=>[prev,{name:MONTHS[item._id - 1],"New Users" : item.total},
        ]))
        }catch(err){
          console.log(err);
        }
      }
  
    getStats();
  }, [MONTHS])


  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" grid={true} dataKey="New Users"/>
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home