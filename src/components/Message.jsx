import React from "react";
import { motion } from "framer-motion";
import "./Message.css";

const Message = ({ text, sender }) => {
  return (
    <motion.div
      className={`message ${sender}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.div>
  );
};

export default Message;
