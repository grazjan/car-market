import { CardMedia, Grid, Typography, Box } from '@mui/material'
import React from 'react'
import { StyledCard, CardMediaPlaceholder, StyledCardContent, StyledIcons, StyledPrice, CardMediaWrapper } from './styled';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import RoomIcon from '@mui/icons-material/Room';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
  return (
    <Link to={`/offers/${item.id}`}>
      <StyledCard>
        <Box bgcolor="grey">
        <Grid container>
          <Grid item xs={12} md={4}>
            <CardMediaWrapper>
              {item.medias && item.medias.length ? item.medias.map((media) => (
                <CardMedia 
                  component="img"
                  image={"http://localhost:1337" + (media.attributes.formats.medium ? media.attributes.formats.medium.url : media.attributes.url)}
                  alt="Car" 
                  key={media.id}
                  loading="lazy"
                />
              ))
              :
              <CardMediaPlaceholder/>
              }
            </CardMediaWrapper>
          </Grid>
          <Grid item xs={12} md={8}>
              <StyledCardContent>
                  <Typography variant='h4' component="h2" >{item.name + " " + item.model}</Typography>
                  <StyledIcons>
                    <Box>
                      <RoomIcon sx={{ verticalAlign: "middle" }} /> {item.location}
                    </Box>
                    <DirectionsCarFilledIcon sx={{ verticalAlign: "middle" }} /> {item.mileage}
                  </StyledIcons>
                  <StyledPrice>
                    {item.price}€
                  </StyledPrice>
              </StyledCardContent>
          </Grid>
        </Grid>
        </Box>
      </StyledCard>
    </Link>
  )
}

export default CardItem