// i will our form to signin
import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

// for react to redux functionality
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {loginStart, loginSuccess, loginFailed} from '../redux/userSlice.js';


const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // for signup form case

    // initializing the dispatch - is a packet dispatecher of the actions of reducer - dispatch(reducer's action(data given/ taken))
    // this dispatch go to the given action reducer and after that stores that data into the browser if success
    const dispatch = useDispatch();
    // once signed in go to homepage
    const navigate = useNavigate();

    // When signin button is clicked - we use fetch api for our data
    const handleLogin = async (e) => {
        e.preventDefault();
        // no arg req in the action
        dispatch(loginStart());
        try { // fetch our data from the db to see if user exist
            const res = await axios.post("/auths/signin", {email, password});
            // once work is complete - send the data given to the redux to store state in browser
            dispatch(loginSuccess(res.data));
            // goto homepage once the login is success
            navigate("/");
        } catch (error) {
            dispatch(loginFailed());
        }
    };


    return (
        <div>
            <h1 className="mt-5">
                Login
            </h1>
            <div>
                <form className='mt-5 container col-sm-6 shadow p-3 mb-5 rounded'>
                    <div className="mb-3 m-3">
                        <label for="Login-Email" className="form-label">Email address</label>
                        <input onChange={
                                (e) => setEmail(e.target.value)
                            }
                            type="email"
                            className="form-control"
                            id="Login-Email"
                            placeholder='Email Id'
                            required="@"/>
                    </div>
                    <div className="mb-3 m-3">
                        <label for="Login-Password" className="form-label">Password</label>
                        <input onChange={
                                (e) => setPassword(e.target.value)
                            }
                            placeholder='password'
                            type="password"
                            className="form-control"
                            id="Login-Password"/>
                    </div>
                    <button onClick={handleLogin}
                        type="submit"
                        className="btn btn-primary container col-11 m-3">Submit</button>
                    <p className='text-center text-xl '>
                        Don't Have An Account?
                        <Link to='/register' className='font-bold'>Registeration Page</Link>
                    </p>
                </form>
            </div>
        </div>
    )

}


export default Login;
