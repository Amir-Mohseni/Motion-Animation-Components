export const svgVariants = {
  hidden: { y: "100vh" },
  visible: {
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const pathVariants = {
  hidden: {
    pathLength: 0,
    strokeWidth: 0,
  },
  visible: {
    pathLength: 1,
    strokeWidth: 10,
    transition: {
      duration: 0.9,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};
