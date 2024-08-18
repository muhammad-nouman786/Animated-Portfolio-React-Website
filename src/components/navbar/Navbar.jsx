import React from "react";
import "./Navbar.css";
import fb from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import yt from "../../assets/youtube.png";
import git from "../../assets/git.png";

import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <>
      <Sidebar />
      <div className="nav">
        <h1 className="logo">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 3 }}
            transition={{ duration: 3 }}
          >
            MOHAMMAD NOUMAN
          </motion.span>
        </h1>
        <ul className="social-icons">
          <li>
            <img src={fb} alt="" />
          </li>
          <li>
            <img src={insta} alt="" />
          </li>
          <li>
            <img src={yt} alt="" />
          </li>
          <li>
            <img src={git} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
