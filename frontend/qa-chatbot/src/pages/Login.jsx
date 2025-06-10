import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


function Login() {

    // State variables initialization.
    const [ loginData, setLoginData ] = useState({
        email: '',
        password: ''
    })
    const [ passwordVisible, setPasswordVisible ] = useState(false)
    const navigate = useNavigate()

    // FUNCTION TO HANDLE CHANGE IN INPUT VALUES.
    const handleChange = (event) => {
        // Extract the name of the field and
        // it's value using the below code.
        const { name, value } = event.target

        // update the state variable.
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    // FUNCTION TO HANDLE LOGIN FORM SUBMISSION.
    const handleLogin = (event) => {
        event.preventDefault();
        console.log(loginData);

        // Redirect to chat page.
        navigate("/chat")
    }

    return (
        <>
            <Navbar />
            <div id="login-page" className="page auth-page">
                <div className="auth-container">
                    <div className="auth-header">
                        <Link className="back-btn" to="/">
                            <i className="fas fa-arrow-left"></i>
                        </Link>
                        <div className="auth-brand">
                            <i className="fas fa-robot"></i>
                            <span>ChatBot AI</span>
                        </div>
                    </div>

                    <div className="auth-form">
                        <h2>Welcome Back</h2>
                        <p>Sign in to continue your conversations</p>

                        <form id="login-form" onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="login-email">Email</label>
                                <div className="input-group">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" id="login-email" name="email" value={loginData.email} onChange={handleChange} placeholder="Enter your email" required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="login-password">Password</label>
                                <div className="input-group">
                                    <i className="fas fa-lock"></i>
                                    <input type={passwordVisible ? "password": "text"} name="password" value={loginData.password} onChange={handleChange} id="login-password" placeholder="Enter your password" required/>
                                    <button type="button" className="toggle-password" onClick={() => setPasswordVisible((prev) => !prev)}>
                                        <i className="fas fa-eye"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="forgot-password">
                                <a href="#">Forgot password?</a>
                            </div>

                            <button type="submit" className="btn btn-primary btn-full">Sign In</button>
                        </form>

                        <div className="auth-footer">
                            <p>Don't have an account? <Link to="/register" >Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login