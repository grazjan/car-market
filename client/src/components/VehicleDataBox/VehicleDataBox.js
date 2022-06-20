import React from 'react'
import { Box, Typography, Grid, Button, ButtonGroup } from '@mui/material'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import RoomIcon from '@mui/icons-material/Room';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';
import { IconWrapper } from './styled';


const VehicleDataBox = ({ vehicle }) => {
  return (
        <Box>
                
            {/* PUBLISHED DATE */}
            <Typography variant="subtitle2">Added {moment(vehicle.publishedAt).subtract(10, 'days').calendar()}</Typography>

            <Grid container>
                <Grid item sm={12} md={8}>
                        
                    {/* TITLE / NAME */}
                    <Typography variant="h4" component="h1">
                        {vehicle.name + " " + vehicle.model}
                    </Typography>         

                </Grid>

                <Grid item sm={12} md={4}>
                    {/* PRICE */}
                    <Typography variant="h5" component="div" textAlign={"right"}>
                        {vehicle.price}€
                    </Typography>
                </Grid>
            </Grid>

            {/* BASIC INFORMATION ABOUT VEHICLE */}
            <Grid container sx={{ marginY: "2rem" }}>
                <Grid item sm={12}>
                    <IconWrapper>
                        <CalendarMonthIcon/>
                        <span>{moment(vehicle.year).format('MM/YYYY')}</span>
                    </IconWrapper>
                </Grid>
                <Grid item sm={6} md={6}> 
                    <IconWrapper>
                        <DirectionsCarFilledIcon/>
                        <span>{vehicle.mileage}km</span>
                    </IconWrapper>
                </Grid>
                <Grid item sm={6} md={6}> 
                    <IconWrapper>
                        <LocalGasStationIcon /> 
                        <span>{vehicle.fuel}</span>
                    </IconWrapper>
                </Grid>
                <Grid item sm={6} md={6}> 
                    <IconWrapper>
                        <SpeedIcon/> 
                        <span>{vehicle.hp}PS</span>
                    </IconWrapper>
                </Grid>
                <Grid item sm={6} md={6}> 
                    <IconWrapper>
                        <RoomIcon/> 
                        <span>{vehicle.location}</span>
                    </IconWrapper>
                </Grid>
            </Grid>

            <ButtonGroup>
                <Button variant="contained" color="primary" startIcon={<MailOutlineIcon />} sx={{ marginRight: "1rem" }}>
                    Send a message
                </Button>
                <Button variant="outlined" color="primary" startIcon={<FavoriteBorderOutlinedIcon />}>
                    Favourite
                </Button>
            </ButtonGroup>

        </Box>
    )
}

export default VehicleDataBox