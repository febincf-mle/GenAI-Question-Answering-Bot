import { Link } from 'react-router-dom'


function Navbar() {

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-brand">
                    <i className="fas fa-robot"></i>
                    <span>ChatBot AI</span>
                </div>
                <div className="nav-links">
                    <Link className="btn btn-ghost" to="/login">Login</Link>
                    <Link className="btn btn-primary" to="/register">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar