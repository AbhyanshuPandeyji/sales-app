import react from 'react'
import AllSales from './AllSales';
import {useSelector} from 'react-redux';
import Login from './Login.js';


const TotalRevenue = () => {

    const {currentUser} = useSelector((state) => state.user);


    return (
        <>
        {!currentUser ? (<Login/>) :(
        <h1 className="mt-5 container">
            <AllSales/>
        </h1>) }</>
    )

}


export default TotalRevenue;
