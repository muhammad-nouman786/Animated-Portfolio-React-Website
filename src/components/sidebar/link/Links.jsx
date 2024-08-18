import React from "react";
import "../Sidebar.css";
import { motion } from "framer-motion";
const Links = () => {
  const items = ["Home", "Services", "Portfolio", "Contact", "About"]
  const variants ={
    open:{
      transition:{
        staggerChildren: 0.1,
      }
    },
    closed:{
      transition:{
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  }

  const itemvariants ={
    open:{
      y:0,
      opacity:1
    },
    closed:{
      y:50,
      opacity:0
    }
  }
  return <div className="links" variants={variants}>
    {items.map(item=>(
     <motion.a href={`#${item}`}key={item} variants={itemvariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>
    ))}
  </div>;
};

export default Links;
