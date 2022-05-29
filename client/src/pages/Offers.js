import { CircularProgress, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getCars } from '../actions/cars'
import CardItem from '../components/Card/CardItem'
import SearchBox from '../components/SearchBox/SearchBox'

const Offers = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const cars = useSelector((state) => state.cars);
  
  useEffect(() => {

    let options = "";
    if(location.search) {
      options = location.search.split("&");
      options = options.map(option => option.split("="))
    }

    dispatch(getCars(options));
  }, [dispatch])

  console.log(cars)
  return (
    <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
      
      {cars && !cars.items ? <CircularProgress/> : 
        cars.items.map((car) => (
          <CardItem item={car} key={car.id} />
        ))
      }

    </Container>
  )
}

export default Offers