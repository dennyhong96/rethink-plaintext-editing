const timings = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit'
};

export const emptyMotions = {
  ...timings,
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } }
};
