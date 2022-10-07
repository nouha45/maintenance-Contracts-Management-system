import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import WidgetLg from "../../components/widgetLg/WidgetLg"


export default function Home() {
  return (
    <div className="App">
    <Topbar/>
   <div className="container">
    <Sidebar/>
     <div className='home'>
    <FeaturedInfo />
    <div className="homeWidgets">
      <WidgetLg/>
    </div>
    </div>
    </div>
    </div>
   
  )
}