import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { AiFillHome ,AiFillSetting } from "react-icons/ai";
import { BiMoviePlay, BiSlideshow,BiCategoryAlt,BiTrendingUp } from "react-icons/bi";
import { MdFiberNew } from "react-icons/md";
 
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
       
          <div className="sidebar-links">
            <div className="s-links">
              <AiFillHome className="images" />
              <Link to="/">
                <span>Home</span>
              </Link>
            </div>
            <div className="s-links">
              <BiMoviePlay className="images" />
              <Link to="/movies">
                <span>Movies</span>
              </Link>
            </div>
            <div className="s-links">
              <BiSlideshow className="images" />
              <Link to="/series">
                <span>Series</span>
              </Link>
            </div>
            <div className="s-links">
              <MdFiberNew className="images" />
              <Link to="/new_release">
                <span>New Release</span>
              </Link>
            </div>

            <div className="s-links">
              <BiCategoryAlt className="images" />
              <Link to="/category">
                <span>Category</span>
              </Link>
            </div>
            <div className="s-links">
              <BiTrendingUp className="images" />
              <Link to="/trending">
                <span>Trending</span>
              </Link>
            </div>
            <div className="s-links">
              <AiFillSetting className="images" />
              <Link to="/">
                <span>
                  <Link to="/settings">
                    <span>Settings</span>
                  </Link>
                </span>
              </Link>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default Sidebar;
