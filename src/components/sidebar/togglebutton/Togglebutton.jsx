import React from "react";
import "../Sidebar.css";
import { motion } from "framer-motion";
const Togglebutton = ({ setOpen }) => {
  return (
    <div className="togglebtn">
      <button  onClick={() => setOpen((prev) => !prev)}>
        {" "}
        <svg
          width="25"
          height="30"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <motion.path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            variants={{
              open: {
                d: "M 3 16.5 L 17 2.5",
              },
              closed: {
                d: "M 2 2.5 L 20 2.5",
              },
            }}
          />
          <motion.path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M 2 9.423 L 20 9.423"
            variants={{
              open: {
                opacity: 0,
              },
              closed: {
                opacity: 1,
              },
            }}
          />
          <motion.path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            variants={{
              open: {
                d: "M 3 2.5 L 17 16.346",
              },
              closed: {
                d: "M 2 16.346 L 20 16.346",
              },
            }}
          />
        </svg>
      </button>
    </div>
  );
};

export default Togglebutton;
