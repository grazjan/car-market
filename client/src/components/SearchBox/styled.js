import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";

/* Search box wrapper */
/* ****************************************** */

export const StyledSearchBox = styled(Paper)({
  padding: "1rem"
})


/* Search box headline / typography */
/* ****************************************** */

export const StyledTypography = styled(Typography)({
    marginBottom: "1rem"
  })


/* Form */
/* ****************************************** */

export const StyledForm = styled('form')({
  '& .MuiInputBase-root': {
      marginBottom: "0.75rem"
  }
})


/* Form action buttons */
/* ****************************************** */

export const StyledButtons = styled('div')({
    marginTop: "1rem"
})
