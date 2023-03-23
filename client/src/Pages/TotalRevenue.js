import react , { useState , useEffect} from 'react'
import AllSales from './AllSales';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Login from './Login.js';


const TotalRevenue = () => {

    
    const [totalRev, setTotalRev] = useState(null);
    const {currentUser} = useSelector((state) => state.user);


    useEffect(() => {
        const fetchData = async () => {
            try { // taking the total revenue
                const total = await axios.get(`/sales/totalrevenue`);

                // setting the total revenue by the amount purchased  - sorry for the json format
                setTotalRev(total.data);

            } catch (error) {
                console.log('error', error);
            }

        }
        // callin function after this process is fininshed
        fetchData();
    }, [currentUser]);


    return (
        <>
        { !currentUser ? (<Login/>) :(
        <h1 className="mt-5 container">
            {totalRev}
        </h1>) }</>
    )

}


export default TotalRevenue;
