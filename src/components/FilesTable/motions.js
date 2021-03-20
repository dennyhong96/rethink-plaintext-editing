export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: 'spring',
      staggerChildren: 0.125
    }
  },
  exit: { opacity: 0 }
};

export const itemVariants = {
  hidden: { opacity: 0, x: -25 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', duration: 0.225, damping: 10 }
  },
  exit: { opacity: 0, x: -25 }
};
