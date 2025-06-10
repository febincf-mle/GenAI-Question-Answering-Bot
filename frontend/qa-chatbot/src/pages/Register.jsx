import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


function Register() {

    // State variables initialization.
    const [ registerData, setRegisterData ] = useState({
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
        setRegisterData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    // FUNCTION TO HANDLE LOGIN FORM SUBMISSION.
    const handleRegister = (event) => {
        event.preventDefault();
        console.log(registerData);

        // Redirect to chat page.
        navigate("/chat")
    }

    return (
        <>
            <Navbar />
            <div id="register-page" class="page auth-page">
                <div class="auth-container">
                    <div class="auth-header">
                        <Link class="back-btn" to="/">
                            <i class="fas fa-arrow-left"></i>
                        </Link>
                        <div class="auth-brand">
                            <i class="fas fa-robot"></i>
                            <span>Jessy</span>
                        </div>
                    </div>

                    <div class="auth-form">
                        <h2>Create Account</h2>
                        <p>Join thousands of users worldwide</p>

                        <form id="register-form" onSubmit={handleRegister}>
                            <div class="form-group">
                                <label htmlFor="register-name">Full Name</label>
                                <div class="input-group">
                                    <i class="fas fa-user"></i>
                                    <input type="text" name="fullname" value={registerData.fullname} onChange={handleChange} id="register-name" placeholder="Enter your full name" required/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label htmlFor="register-email">Email</label>
                                <div class="input-group">
                                    <i class="fas fa-envelope"></i>
                                    <input type="email" name="email" value={registerData.email} onChange={handleChange} id="register-email" placeholder="Enter your email" required/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label htmlFor="register-password">Password</label>
                                <div class="input-group">
                                    <i class="fas fa-lock"></i>
                                    <input type={passwordVisible ? "password": "text"} name="password" value={registerData.password} onChange={handleChange} id="register-password" placeholder="Create a password" required/>
                                    <button type="button" class="toggle-password" onClick={() => setPasswordVisible(prev => !prev)}>
                                        <i class="fas fa-eye"></i>
                                    </button>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary btn-full">Create Account</button>
                        </form>

                        <div class="auth-footer">
                            <p>Already have an account? <Link to="/login">Sign in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register