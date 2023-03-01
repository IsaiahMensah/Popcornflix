import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../sidebar/Sidebar'
import "./MainPage.css"
import MainArea from '../pages/mainarea/MainArea'
import Trending from '../trending/Trending'
import IMageSlider from "../slider/ImageSlider"
// import Home from"../mainarea/MainArea"
// import Movies from '../pages/Movies'
// import Series from "../pages/Series"
// import NewRelease from "../pages/NewRelease"
// import Category from "../pages/Category";
// import Trendingpage from "../pages/Trendingpage";
// import Settings from "../pages/Settings";
import{Outlet } from 'react-router-dom'

const Mainpage = () => {
  return (
    <div className='mainpage'>
        <Navbar/>
        <Sidebar/>
        {/* <MainArea/> */}
       <Outlet/>
    </div>
  )
}

export default Mainpage