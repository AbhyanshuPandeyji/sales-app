import React from 'react'

const TopSales = () => {
    return (
        <div>
            <h1 className="mt-5">
                TOP 5 SALES
            </h1>
            <div className='container mt-5 shadow p-3 mb-5 rounded'>
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
                            <td>S1212</td>
                            <td>Laptop</td>
                            <td>2</td>
                            <td>90000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>S1423</td>
                            <td>Mobile</td>
                            <td>5</td>
                            <td>85000</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    )
}


export default TopSales;
