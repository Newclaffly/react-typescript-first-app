// import React, { useState, useEffect } from 'react';
import React from 'react';

// import { SeriesProps } from './interface/SeriesProps';
// import axios from 'axios';
// import ListCars from './components/car/ListCars';
import Listjonal from './components/jonal/Listjonal';
import './App.css';
// import Form from './components/Form'
// import List from './components/List'

// const base_url = "http://localhost:3000/getCar"
// type Car = {
//   model: string
// }
// type User = {
//   username: string
//   password: string
//   cars: Car[]
// }

function App() {

  // const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([])
  // const [carsList, setCarlist] = useState<User[]>([])
  // useEffect(() => {
  //   axios.get("http://localhost:3000/getCar").then((response) => {
  //     setCars(response.data)
  //     console.log(response.data)
  //   }).catch((err) => {
  //     console.log(err)
  //   });
  // }, [])

  // const getallCars = () => {
  //   axios.get("http://localhost:3000/getCar").then((response) => {
  //     setCarlist(response.data)
  //     console.log(response.data)
  //   })
  // }

  // if (!cars) return null

  return (
    <div className="App">
      <Listjonal />
      {/* <button onClick={getallCars}>Get car information</button>
      {carsList.map((val, index) => {
        return <div className="list-car-item" key={val.id} >
          <h3>Username: {val.username}</h3>
          <h3>Password: {val.password}</h3>
          {val.cars.map((c: any, j: any) => (
            <h3 key={j}>Model: {c.model}</h3>
          ))}
        </div>
      })}  */}


      {/* <h1>{post.title}</h1> */}

      {/* <Form seriesList={seriesList} setSeriesList={setSeriesList}/>
        <List seriesList={seriesList}/> */}

    </div>
  );
}

export default App;
