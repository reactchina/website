import logo from "../logo.svg";
import { motion } from "framer-motion";

const ease = [0.6, 0.1, -0.05, 0.9];

const logoTransitions = {
  delay: 1.5,
  ease: ease,
  duration: 2,
};

const titleVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      opacity: {
        delay: 2.3,
      },
    },
  },
};
const logoVariants = {
  initial: {
    width: "30vw",
    y: "25vh",
    x: "33vw",
  },

  animate: {
    width: "5rem",
    x: "1rem",
    y: "1rem",
    rotate: [0, 180, 360],
    transition: {
      rotate: {
        loop: Infinity,
        ease: "linear",
        duration: 10,
      },
      width: logoTransitions,
      x: logoTransitions,
      y: logoTransitions,
    },
  },
};
function App() {
  return (
    <motion.div initial="initial" animate="animate" className="app">
      <motion.h2 variants={titleVariants}>Coming Soon...</motion.h2>
      <motion.img
        width="5rem"
        variants={logoVariants}
        src={logo}
        className="app-logo"
        alt="logo"
      />

      <motion.div className="container">
        <motion.h1 variants={titleVariants}>React</motion.h1>
        <motion.h1 variants={titleVariants}>China</motion.h1>
      </motion.div>
    </motion.div>
  );
}

export default App;
