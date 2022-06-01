import { CircularProgress, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getCars } from '../actions/vehicle'
import CardItem from '../components/Card/CardItem'
import SearchBox from '../components/SearchBox/SearchBox'

const Offers = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const vehicles = useSelector((state) => state.vehicle);
  
  useEffect(() => {

    let options = "";
    if(location.search) {
      options = location.search.split("&");
      options = options.map(option => option.split("="))
    }

    dispatch(getCars(options));
  }, [dispatch])

  console.log(vehicles)
  return (
    <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
      
      {vehicles && !vehicles.items ? <CircularProgress/> : 
        vehicles.items.map((car) => (
          <CardItem item={car} key={car.id} />
        ))
      }

    </Container>
  )
}

export default Offers