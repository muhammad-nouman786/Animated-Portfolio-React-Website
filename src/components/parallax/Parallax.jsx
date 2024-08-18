import React, { useRef } from 'react'
import "./Parallax.css";
import { motion, useScroll, useTransform } from 'framer-motion';
import planets from "../../assets/planets.png"
import sun from "../../assets/sun.png"
const Parallax = ({type}) => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start" , "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"])
  return (
    <motion.div ref={ref} className='parallax' style={{background:type==="services"?"linear-gradient(180deg, #111132, #0c0c1d )":"linear-gradient(180deg, #111132 , #505054)"}}>
        <motion.h1 style={{y:yText}}>{type==="services"? "What We Do": "What We Did"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div  style={{y:yBg, backgroundImage: `url(${type==="services"?planets:sun})`}} className="planets"></motion.div>
        <motion.div style={{x:yBg}} className="stars"></motion.div>
    </motion.div>
  )
}

export default Parallax