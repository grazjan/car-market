import { CircularProgress, Container } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getCar } from '../actions/cars';

const OfferDetail = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const car = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCar(params.id));
  }, [dispatch])
  console.log(car)
  return (
    <Container>
      {!car ? <CircularProgress/> : 
        car.name
      }
    </Container>
  )
}

export default OfferDetail