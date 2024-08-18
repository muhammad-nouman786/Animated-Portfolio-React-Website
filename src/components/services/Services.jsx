import { motion } from "framer-motion";
import "./Services.css";
import React from "react";
import people from "../../assets/people.webp";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainier">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src={people} alt="" />
          <h1>
            <b>Unique </b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b>Business
          </h1>
          <button>WHAT WE DO</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            laborum nemo rem voluptas adipisci optio praesentium exercitationem
            maiores aliquam ex!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            laborum nemo rem voluptas adipisci optio praesentium exercitationem
            maiores aliquam ex!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h1>Branding</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            laborum nemo rem voluptas adipisci optio praesentium exercitationem
            maiores aliquam ex!
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
