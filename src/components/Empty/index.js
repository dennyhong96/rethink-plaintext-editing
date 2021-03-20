import React from 'react';
import { motion } from 'framer-motion';

import { emptyMotions } from './motions';
import css from './styles.module.css';

const Empty = () => {
  return (
    <motion.div className={css.empty} {...emptyMotions}>
      Select a file to view or edit
    </motion.div>
  );
};

export default Empty;
