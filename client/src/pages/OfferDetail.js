import { Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getCar } from '../actions/vehicle';
import Gallery from '../components/Gallery/Gallery';
import moment from 'moment';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import RoomIcon from '@mui/icons-material/Room';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VehicleDataBox from '../components/VehicleDataBox/VehicleDataBox';
import VehicleDataTable from '../components/VehicleDataTable/VehicleDataTable';


const OfferDetail = () => {

  const dispatch = useDispatch();
  const params = useParams();

  const vehicle = useSelector((state) => state.vehicle.currentItem);

  useEffect(() => {
    dispatch(getCar(params.id));
  }, [dispatch])
  console.log(vehicle)
  return (
    <Container>
      {!vehicle ? <CircularProgress/> : 
      <>

        {/* TOP SECTION */}
        <Grid container spacing={4} sx={{ marginTop: "4rem" }}>
        
            <Grid item sm={12} md={7}>
              <Gallery medias={vehicle.medias}/>
            </Grid>

            <Grid item sm={12} md={5}>
              <VehicleDataBox vehicle={vehicle}/>
            </Grid>

        </Grid>

        {/* VEHICLE DATA TABLE */}
        <Grid container sx={{ marginTop: "4rem" }}>
          <Grid item sm={12} md={12}>
            <VehicleDataTable vehicle={vehicle}/>
          </Grid>
        </Grid>

        {/* VEHICLE DESCRIPTION */}
        <Grid container sx={{ marginY: "5rem" }}>
          <Grid item sm={12} md={12}>
            <Typography sx={{ marginBottom: "2rem" }} variant="h4" component="h2">Description</Typography>
            {vehicle.description}
          </Grid>
        </Grid>

      </>
      }
    </Container>
  )
}

export default OfferDetail