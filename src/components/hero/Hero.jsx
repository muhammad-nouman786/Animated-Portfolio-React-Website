import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero.png";
import mouse from "../../assets/scroll.png";
import { motion } from "framer-motion";
const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton:{
      opacity:0,
      y:10,
     transition:{
      duration: 2,
      repeat: Infinity,
     }
    }
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        duration:20,
        repeatType:"mirror"
      },
    },
  }
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="text" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Mohammad Nouman</motion.h2>
          <motion.h1 variants={textVariants}>MERN STACK DEVELOPER</motion.h1>
          <motion.div variants={textVariants} className="btn">
            <motion.button variants={textVariants}>See The Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src={mouse} alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingtext" variants={sliderVariants} initial="initial" animate="animate">Writer Content Creator Influencer</motion.div>
      <div className="img">
        <img src={heroImg} height={550} alt="" />
      </div>
    </div>
  );
};

export default Hero;
