import { Link } from 'react-router-dom'
import Features from "./Features"


function HeroSection() {


    return(
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Your AI Assistant for
                    <span className="gradient-text">Everything</span>
                </h1>
                <p className="hero-description">
                    Get instant answers, creative solutions, and intelligent conversations with our advanced AI chatbot. 
                    Experience the future of digital assistance today.
                </p>
                
                <div className="hero-buttons">
                    <Link className="btn btn-primary btn-large" to="/chat">
                        Start Chatting
                    </Link>
                    <Link className="btn btn-outline btn-large" to="/register">
                        Create Account
                    </Link>
                </div>

                {/* Features */}
                <Features />
            </div>
        </div>
    )
}

export default HeroSection