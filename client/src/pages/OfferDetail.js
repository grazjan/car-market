import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getCar } from '../actions/cars';
import Gallery from '../components/Gallery/Gallery';

const OfferDetail = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const car = useSelector((state) => state.cars.currentItem);

  useEffect(() => {
    dispatch(getCar(params.id));
  }, [dispatch])
  console.log(car)
  return (
    <Container>
      {!car ? <CircularProgress/> : 

        <Grid container spacing={2} sx={{ marginTop: "4rem" }}>
        
            <Grid item md={6}>
              <Gallery medias={car.medias}/>
            </Grid>

            <Grid item md={6}>
              <Box>
                <Typography variant="h4" component="h1">
                  {car.name + " " + car.model}
                </Typography>
              </Box>
            </Grid>

        </Grid>

      }
    </Container>
  )
}

export default OfferDetail