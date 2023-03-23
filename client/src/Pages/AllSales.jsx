import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios';
import Sales from './Sales.jsx'


import Login from './Login.js';

const AllSales = () => {


    const [allSales, setAllSales] = useState(null);
    const {currentUser} = useSelector((state) => state.user);


    useEffect(() => {
        const fetchData = async () => {
            try { // taking the tweets of the
                const allSales = await axios.get(`/sales/allsales`);

                // setting the tweets in app to the tweets of user and he follows
                setAllSales(allSales.data);

            } catch (error) {
                console.log('error', error);
            }

        }
        // callin function after this process is fininshed
        fetchData();
    }, [currentUser._id]);
        


    return (
        <>
        <div className='mt-6 container-fluid'>
            {
            allSales && allSales.map((allSales) => {
                return (
                    <div key={
                            allSales._id
                        }
                        className="p-2">
                        {/* tweet to send all req tweets to show  set data when the tweet been made to add that new tweet */}
                        <Sales allSales={allSales}
                            setData={setAllSales}/>
                    </div>
                );
            })
        } </div>
        </>

    );
}

export default AllSales;
