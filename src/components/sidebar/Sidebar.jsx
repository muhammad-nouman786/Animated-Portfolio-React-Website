import { motion } from "framer-motion";
import { useState } from "react";
import "./Sidebar.css";
import Links from "./link/Links";
import Togglebutton from "./togglebutton/Togglebutton";
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        dumping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Togglebutton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
