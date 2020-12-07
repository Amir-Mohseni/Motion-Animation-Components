export const amirSvgVariants = {
  hidden: { y: "100vh" },
  visible: {
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const amirsvgPath = {
  hidden: {
    strokeWidth: 0,
    scale: 1,
  },
  visible: {
    strokeWidth: 12,
    scale: 1.1,
    transition: {
      duration: 0.9,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

export const navSvgVariants = {
  hidden: { x: -400 },
  visible: {
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const navPathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 4,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

export const navUl = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 12,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.5,
    },
  },
};

export const navLi = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.02,
    textShadow: "0px 0px 1px rgb(255,255,255)",
    boxShadow: "0px 0px 1px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
