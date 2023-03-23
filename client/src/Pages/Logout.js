import react from 'react'
import {Link} from 'react-router-dom';



import { useDispatch , useSelector } from 'react-redux'
import { logout } from '../redux/userSlice.js'
import Login from './Login.js';


const Logout = () => {

    const {currentUser} = useSelector((state) => state.user);


    const dispatch = useDispatch();


    const handleLogout = () => {
        // when user click logout goto signin page - state of user to null
        dispatch(logout());
    }



    return (
        <>
        {!currentUser ? (<Login/>) : (
        <h1 className="mt-5">
                        <div className='flex justify-between'>
                <div>
                    <p className='font-bold'>{currentUser.firstname}</p>
                    <p className='font-bold'>@{currentUser.firstname}</p>
                </div>
                <div>
                    <Link to="/Login">
                        <button className='btn btn-danger'
                            onClick={handleLogout}>Logout</button>
                    </Link>
                </div>
            </div>
        </h1>) }
        </>
    )

}


export default Logout;
