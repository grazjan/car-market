import { Drawer, styled, Toolbar } from "@mui/material";

/* Toolbar / Hamburger Icon (Mobile) */
/* ****************************************** */

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: "stretch",
    [theme.breakpoints.down('sm')]: {
        padding: 0
    },
    '& .MuiIconButton-root': {
        [theme.breakpoints.down('sm')]: {
            marginLeft: "auto"
        },
    }
}))


/* Logo */
/* ****************************************** */

export const StyledLogo = styled('div')(({ theme }) => ({
    '& img': {
        maxWidth: "120px",
        [theme.breakpoints.up('sm')]: {
            maxWidth: "170px"
        },
    }
}))


/* Main Navigation */
/* ****************************************** */

export const StyledNavigation = styled('nav')(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 1,

    //Menu items...
    '& .MuiList-root': {
        display: "flex",
        '& .MuiMenuItem-root': {
            padding: 0,
            '& .menu-link': {
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
        }
    }
}))


/* Drawer */
/* ****************************************** */

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiList-root': {
        width: "300px"
    }
}))