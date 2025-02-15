import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Chatbot.css";
import Message from "./Message";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today? 😊", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulating bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm here to help! 🤖", sender: "bot" }
      ]);
    }, 1000);
  };

  return (
    <motion.div
      className="chatbot-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="chat-header">
        <h3>Chatbot</h3>
      </div>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </motion.div>
  );
};

export default Chatbot;
