import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Layout = ({ children }) => {
    return (
        <AnimatePresence wait>
            <motion.div
                key="layout"
                initial={{ opacity: 0.8 }}
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
