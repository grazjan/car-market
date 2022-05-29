import { styled } from "@mui/material";

/* Popup content */
/* ****************************************** */

export const StyledPopup = styled('div')({
    padding: "2rem",
    background: '#fff',
    position: "absolute",
    top: "50%",
    width: 700,
    left: "50%",
    transform: 'translate(-50%, -50%)'
})


/* Form */
/* ****************************************** */

export const StyledForm = styled('div')({
    '& .MuiInputBase-root': {
        marginBottom: "0.75rem"
    }
})