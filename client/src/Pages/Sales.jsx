import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link, useLocation, useParams} from "react-router-dom";
import {useSelector} from 'react-redux';


const Sales = ({allSales, setData}) => { // current user login
    const {currentUser} = useSelector((state) => state.user);

    const [userData, setUserData] = useState();


    // for dispalying data in good format  - formatting mongo db date

    // for seeing effect of like imidiately- initializing useLocation

    // bringing id form the url
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {

            try {
                // could be any users tweet it will be filter out based on the condition  - tweets related to the user
                // condition will be based on different pages
                // find individual user info
                const findUser = await axios.get(`/users/find/${
                    allSales.userId
                }`);

                setUserData(findUser.data);

            } catch (error) {
                console.log('error', error)
            }

        };

        fetchData();
    }, [allSales.userId]);
    // load again if like or userid changes


    // for handling the like functionality
    return (
        <>
            <div></div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Sales Id:</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Sale Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{
                            allSales.userId
                        }</td>
                        <td>{
                            allSales.product
                        }</td>
                        <td>{
                            allSales.quantity
                        }</td>
                        <td>{
                            allSales.amount
                        }</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
};

export default Sales;
