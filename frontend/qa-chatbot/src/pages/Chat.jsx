import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const sampleResponses = [
  "That's an interesting question! Let me think about that...",
  "Based on what I know, I'd say that depends on several factors.",
  "Great question! Here's what I can tell you about that topic.",
  "I understand your concern. Let me provide some insights on this.",
  "That's a complex topic, but I'll try to break it down for you.",
  "Excellent question! This is actually quite fascinating to explore.",
  "I appreciate you asking this. Here's my perspective on the matter.",
  "That's something many people wonder about. Let me explain...",
];

function formatTime(date) {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function Chat() {

    // State variables initialization.
    const [messages, setMessages] = useState([
        {
        sender: 'bot',
        text: "Hello! I'm your AI assistant. Ask me anything and I'll do my best to help you!",
        time: formatTime(new Date()),
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const navigate = useNavigate()

    // Ref hook for direct dom manipulation.
    const messagesRef = useRef(null);

    // Scroll to bottom when messages update
    useEffect(() => {
        if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages]);

    // FUNCTION TO MOCK THE GENERATED RESPONSE FROM CHATBOT.
    const generateResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return "Hello there! How can I assist you today?";
        }

        if (lowerMessage.includes('how are you') || lowerMessage.includes('how do you do')) {
        return "I'm doing great, thank you for asking! I'm here and ready to help with any questions you might have.";
        }

        if (lowerMessage.includes('what') && lowerMessage.includes('name')) {
        return "I'm ChatBot, your friendly AI assistant! What's your name?";
        }

        if (lowerMessage.includes('weather')) {
        return "I don't have access to real-time weather data, but I'd recommend checking a weather app or website for the most accurate forecast in your area!";
        }

        if (lowerMessage.includes('time')) {
        return `The current time is ${new Date().toLocaleTimeString()}. Is there anything specific you'd like to know about time management or scheduling?`;
        }

        if (lowerMessage.includes('help')) {
        return "I'm here to help! You can ask me questions about various topics, and I'll do my best to provide helpful answers. What would you like to know?";
        }

        if (lowerMessage.includes('thank')) {
        return "You're very welcome! I'm glad I could help. Feel free to ask me anything else!";
        }

        return sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
    };

    // FUNCTION TO HANDLE LOGOUT
    const handleLogout = () => {
        navigate("/")
    }

    // FUNCTION TO HANDLE SENDING USER MESSAGES.
    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed || isTyping) return;

        const userMsg = {
            sender: 'user',
            text: trimmed,
            time: formatTime(new Date()),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const botText = generateResponse(trimmed);
            const botMsg = {
                sender: 'bot',
                text: botText,
                time: formatTime(new Date()),
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
            }, 1000 + Math.random() * 2000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
        }
    };

    return (
        <div className="page chat-page">
        <div className="chat-header">
            <div className="chat-header-content">
            <div className="bot-avatar">
                <i className="fas fa-robot"></i>
            </div>
            <div className="chat-info">
                <h1>AI ChatBot</h1>
                <p>Always here to help</p>
            </div>
            <button onClick={handleLogout} className="logout-btn">
                <i className="fas fa-sign-out-alt"></i>
            </button>
            </div>
        </div>

        <div id="messages-container" className="messages-container" ref={messagesRef}>
            {messages.map((msg, idx) => (
            <div
                key={idx}
                className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
                <div className="message-avatar">
                <i className={`fas ${msg.sender === 'user' ? 'fa-user' : 'fa-robot'}`}></i>
                </div>
                <div className="message-content">
                <div className="message-bubble">
                    <p>{msg.text}</p>
                </div>
                <div className="message-time">{msg.time}</div>
                </div>
            </div>
            ))}

            {isTyping && (
            <div className="typing-indicator">
                <div className="message-avatar">
                <i className="fas fa-robot"></i>
                </div>
                <div className="message-content">
                <div className="typing-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                </div>
            </div>
            )}
        </div>

        <div className="chat-input">
            <div className="input-container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message here..."
            />
            <button onClick={handleSend} disabled={isTyping}>
                <i className="fas fa-paper-plane"></i>
            </button>
            </div>
        </div>
        </div>
    );
}

export default Chat;
