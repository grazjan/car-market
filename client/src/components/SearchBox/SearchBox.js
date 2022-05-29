import { useState } from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { productionYears } from '../../constants/constants';
import { StyledButtons, StyledForm, StyledSearchBox, StyledTypography } from './styled';
import Popup from '../Popup/Popup';


const SearchBox = () => {

    const [formData, setFormData] = useState({ brand: '', model: '', location: '' });
    const [popupIsOpen, setPopupIsOpen] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        //Set form data by target name
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  
    return (
        <StyledSearchBox elevation={5}>
            <StyledTypography variant="h4" component="h2">Find a car</StyledTypography>
            <StyledForm onSubmit={handleSearch}>

                {/* Brand search */}
                <FormControl fullWidth>
                    <InputLabel id="brand-label">Brand</InputLabel>
                    <Select labelId='brand-label' value={formData.brand} name="brand" onChange={handleChange} label="Brand">
                        <MenuItem value="BMW">BMW</MenuItem>
                        <MenuItem value="Audi">Audi</MenuItem>
                        <MenuItem value="Fiat">Fiat</MenuItem>
                    </Select>   
                </FormControl>

                {/* Model search */}
                <FormControl fullWidth>
                    <InputLabel id="model-label">Model</InputLabel>
                    <Select labelId='model-label' value={formData.model} name="model" onChange={handleChange} label="Model">
                        <MenuItem value="BMW">BMW</MenuItem>
                        <MenuItem value="Audi">Audi</MenuItem>
                        <MenuItem value="Fiat">Fiat</MenuItem>
                    </Select>   
                </FormControl>

                {/* Production year from search */}
                <FormControl fullWidth>
                    <InputLabel id="model-label">Price from</InputLabel>
                    <Select labelId='model-label' value={formData.year} name="model" onChange={handleChange} label="Model">
                        <MenuItem value="BMW">BMW</MenuItem>
                        <MenuItem value="Audi">Audi</MenuItem>
                        <MenuItem value="Fiat">Fiat</MenuItem>
                    </Select>   
                </FormControl>

                {/* Production year from search */}
                <FormControl fullWidth>
                    <InputLabel id="model-label">Year from</InputLabel>
                    <Select labelId='model-label' value={formData.model} name="model" onChange={handleChange} label="Model">
                        {console.log(productionYears)}
                        {productionYears && productionYears.map((year) => (
                            <MenuItem key={year.value} value={year.value}>
                                {year.label}
                            </MenuItem>
                        ) )}
                    </Select>   
                </FormControl>

                {/* Location search */}
                <TextField fullWidth name="location" value={formData.location} onChange={handleChange} label="Location" />
                
                {/* Action buttons */}
                <StyledButtons>
                    <Button fullWidth type='submit' variant="contained">Search</Button>
                    <Button fullWidth variant='text' onClick={() => setPopupIsOpen(true)}>Advanced search</Button>
                </StyledButtons>

            </StyledForm>

            {/* Advanced Search popup include */}
            <Popup isOpen={popupIsOpen} handleTogglePopup={setPopupIsOpen} />

        </StyledSearchBox>
  )
}

export default SearchBox