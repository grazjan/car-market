import styled from "@emotion/styled";
import { Card, CardContent } from "@mui/material";

/* Card wrapper */
/* ****************************************** */

export const StyledCard = styled(Card)(({ theme }) => ({
    position: "relative",
    background: theme.palette.grey[200],
    boxShadow: "none",
    marginBottom: "1.25rem",
    cursor: "pointer"
}))


/* Card content */
/* ****************************************** */

export const StyledCardContent = styled(CardContent)({
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    height: "100%"
});


/* Card media wrapper */
/* ****************************************** */

export const CardMediaWrapper = styled('div')({
    position: "relative",
    paddingBottom: "50%",
    '& .MuiCardMedia-img': {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        objectFit: "cover",
        width: "100%",
        height: "100%"
    }
})


/* Card media placeholder */
/* ****************************************** */

export const CardMediaPlaceholder = styled('div')({
    background: "grey",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
})


/* Price */
/* ****************************************** */

export const StyledPrice = styled('div')({
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    fontWeight: 600,
    fontSize: "20px",
    letterSpacing: "0.8px"
});


/* Icons group */
/* ****************************************** */

export const StyledIcons = styled('div')({
    marginTop: "auto"
});

