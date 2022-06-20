import { styled, Toolbar } from "@mui/material";

/* Toolbar */
/* ****************************************** */

export const StyledToolbar = styled(Toolbar)({
    alignItems: "stretch"
})


/* Logo */
/* ****************************************** */

export const StyledLogo = styled('div')({
    '& img': {
        maxWidth: "170px"
    }
});


/* Main Navigation */
/* ****************************************** */

export const StyledNavigation = styled('nav')(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 1,

    //Menu items...
    '& .menu-item': {
        color: theme.palette.primary.main,
        textDecoration: "none",
        padding: "1.75rem 1.5rem",
        fontWeight: "bold",
        fontSize: "1.15rem",
        height: "100%",
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        }
    }
}))