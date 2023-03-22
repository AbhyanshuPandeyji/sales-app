import React, {useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

// for react to redux functionality
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {loginStart, loginSuccess, loginFailed} from '../redux/userSlice.js';

const Register = () => {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [password, setPassword] = useState("");
    // for signup form case
    const [email, setEmail] = useState("");


    const dispatch = useDispatch();
    // once signed in go to homepage
    const navigate = useNavigate();

    // for signup funtionality
    const handleSignup = async (e) => {
        e.preventDefault();
        dispatch(loginStart());

        try {
            const res = await axios.post("/auths/signup", {firstname, lastname, email, password});
            dispatch(loginSuccess(res.data));
            navigate("/Login"); // could be the different pages and the link after signup could be signin page
        } catch (error) {
            dispatch(loginFailed());
        }
    }


    return (
        <div>
            <h1 className="mt-5">
                Register
            </h1>
            <div>
                <form className='mt-5 container col-sm-6 shadow p-3 mb-5 rounded'>
                    <div className="mb-3 m-3">
                        <label for="Register-Firstname" className="form-label">First Name</label>
                        <input onChange={
                                (e) => setFirstName(e.target.value)
                            }
                            type="text"
                            placeholder='Firstname'
                            className="form-control"
                            id="Register-Firstname"/>
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Register-Lastname" className="form-label">Last Name</label>
                        <input onChange={
                                (e) => setLastName(e.target.value)
                            }
                            type="text"
                            placeholder='Lastname'
                            className="form-control"
                            id="Register-Lastname"/>
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Register-Email" className="form-label">Email</label>
                        <input onChange={
                                (e) => setEmail(e.target.value)
                            }
                            type="email"
                            placeholder='E-mail'
                            className="form-control"
                            id="Register-Email"
                            required="@"/>
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Register-Password" className="form-label">Password</label>
                        <input onChange={
                                (e) => setPassword(e.target.value)
                            }
                            type="password"
                            placeholder='Password'
                            className="form-control"
                            id="Register-Password"/>
                    </div>
                    <button onClick={handleSignup}
                        type="submit"
                        className="btn btn-primary container col-11 m-3">Submit</button>
                    <p className='text-center text-xl '>
                        Already have an Account?
                        <Link to='/login' className='font-bold '>SignIn Page</Link>
                    </p>
                </form>
            </div>
        </div>
    )

}


export default Register;
