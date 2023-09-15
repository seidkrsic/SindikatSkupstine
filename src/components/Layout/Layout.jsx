import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <AnimatePresence wait>
      <motion.div
        key="layout"
        initial={{ opacity: .8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;

