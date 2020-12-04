import "./App.css";
import Home from "./components/Home/Home";
import { motion } from "framer-motion";
import { svgVariants, pathVariants } from "./animation-variants";
import { useState } from "react";

function App() {
  return (
    <div>
      <motion.div className={"logo-wrapper flex-start"}>
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.7}
        >
          <motion.svg
            drag
            dragElastic={1}
            className="logo"
            viewBox="0 0 1500 1500"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.polygon
              fill="none"
              stroke="#fff"
              variants={pathVariants}
              className="logo-path"
              points="1024 459.243 1024 719.194 877.65 634.693 877.65 543.736 750 470.041 622.35 543.736 622.35 634.693 476 719.194 476 459.243 750 301.047 1024 459.243"
            />
            <motion.polygon
              fill="none"
              stroke="#fff"
              variants={pathVariants}
              className="logo-path"
              points="877.65 1007.308 1024 1091.801 1024 1091.907 750 1250.103 476 1091.907 476 1091.801 622.35 1007.308 622.35 1007.414 750 1081.118 877.65 1007.414 877.65 1007.308"
            />
            <motion.polygon
              fill="none"
              stroke="#fff"
              variants={pathVariants}
              className="logo-path"
              points="1024 775.522 1024 1035.473 877.65 950.972 877.65 860.121 750 933.824 622.35 860.121 622.35 950.972 476 1035.473 476 775.522 622.35 691.029 622.35 691.135 750 764.839 877.65 691.135 877.65 691.029 1024 775.522"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
      <Home />
    </div>
  );
}

export default App;
