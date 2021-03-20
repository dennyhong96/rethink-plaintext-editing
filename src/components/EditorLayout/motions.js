const timings = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit'
};

export const layoutMotions = {
  ...timings,
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } }
};

export const screenMotions = {
  ...timings,
  variants: {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 15, transition: { duration: 0.25 } }
  }
};

export const buttonMotions = {
  ...timings,
  variants: {
    initial: { opacity: 0, x: -25 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, x: 25, transition: { duration: 0.25 } }
  }
};
