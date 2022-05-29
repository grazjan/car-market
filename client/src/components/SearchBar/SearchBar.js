import React, { useState } from 'react'
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import HeaderImage from '../../images/home-header.jpg';
import { StyledHeaderImage, StyledSearchBar, StyledHeadline } from './styled';


const SearchBar = () => {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ brand: '', model: '', location: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault();

    //Create search url 
    let url = "/offers";
    if(formData.brand) url += `?name=${formData.brand}`;
    if(formData.brand && formData.model) url += `&model=${formData.model}`;
    if(formData.location) url += `${formData.brand ? "&location": "?location"}=${formData.location}`;

    navigate(url);
  }

  const handleChange = (e) => {
    //Set form data by target name
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
 
  return (
    <Box sx={{ position: 'relative' }}>

        {/* Background image */}
        <StyledHeaderImage>
            <img src={HeaderImage} alt="Audi A8" />
        </StyledHeaderImage>

        {/* Headline */}
        <StyledHeadline>
            <Typography align='center' color="white" variant="h2">Find your dream car</Typography>
        </StyledHeadline>

        {/* Search form */}
        <StyledSearchBar>
            <Container>
                <Paper elevation={5} sx={{ padding: 2 }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container gap={2} alignItems="center" justifyContent="center">

                            {/* Brand search */}
                            <Grid item xs={12} sm={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="brand-label">Brand</InputLabel>
                                    <Select labelId='brand-label' value={formData.brand} name="brand" onChange={handleChange} label="Brand">
                                        <MenuItem value="BMW">BMW</MenuItem>
                                        <MenuItem value="Audi">Audi</MenuItem>
                                        <MenuItem value="Fiat">Fiat</MenuItem>
                                    </Select>   
                                </FormControl>
                            </Grid>

                            {/* Model search */}
                            <Grid item xs={12} sm={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="model-label">Model</InputLabel>
                                    <Select labelId='model-label' value={formData.model} name="model" onChange={handleChange} label="Model">
                                        <MenuItem value="BMW">BMW</MenuItem>
                                        <MenuItem value="Audi">Audi</MenuItem>
                                        <MenuItem value="Fiat">Fiat</MenuItem>
                                    </Select>   
                                </FormControl>
                            </Grid>

                            {/* Location */}
                            <Grid item xs={12} sm={3}>
                                <TextField fullWidth name="location" value={formData.location} onChange={handleChange} label="Location" />
                            </Grid>

                            {/* Submit */}
                            <Grid item xs={12} sm={2}>
                                <Button fullWidth type='submit' variant="contained">Search</Button>
                            </Grid>

                        </Grid>
                    </form>
                </Paper>
            </Container>
        </StyledSearchBar>

    </Box>
  )
}

export default SearchBar