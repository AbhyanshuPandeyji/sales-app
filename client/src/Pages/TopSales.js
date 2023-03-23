// this is to show the all sales
        import React from 'react'
    import {useSelector} from 'react-redux'
    // import Signin from '../Signin/Signin.jsx';
    import AllSales from './AllSales';
    import Login from "./Login.js";

    const TopSales = () => {


        const {currentUser} = useSelector((state) => state.user);


        return (
        <>{ !currentUser ? (<Login/>):
        (<div className='container'>
            <h1 className="mt-5">
                TOP 5 SALES
            </h1>
            <AllSales/>
        </div>)}
        </>
    )
}


export default TopSales;
