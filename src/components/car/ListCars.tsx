import React, { useEffect, useState } from 'react'
import axios from 'axios'


function ListCars() {
    const [carList, setCarlist] = useState([])



    const getAllCars = () => {
        axios.get('http://localhost:3000/getCar').then(response => {
            console.log(response.data)
        }).catch((err) => {

        });
    }

    return (
        <>
            <button onClick={getAllCars}>Get information car</button>
            <div className="list-car">

            </div>
        </>

    )
}

export default ListCars