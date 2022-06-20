import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Container, IconButton, MenuItem, MenuList, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { StyledLogo, StyledNavigation, StyledToolbar } from './styled';
import Drawer from './Drawer/Drawer';

const pages = ['Search', 'Sell', 'About']

const NavBar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <AppBar position="static" color="default">
            <Container maxWidth="xl">
                <StyledToolbar>
                    <StyledLogo>
                        <Link to="/">
                            <img src={Logo} alt="Car Market Logo" title="Car Market" />
                        </Link>
                    </StyledLogo>
                    <StyledNavigation role="navigation" aria-label='Main Navigation' sx={{ display: { xs: "none", md: "flex" } }}>
                        <MenuList itemType="http://www.schema.org/SiteNavigationElement" itemScope variant="selectedMenu">
                            {pages.map((page) => (
                                <MenuItem
                                    key={page} 
                                    to="/"
                                    itemProp='url'
                                    role='menuItem'
                                >
                                    <Link className="menu-link" itemProp='url' to="/">{page}</Link>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </StyledNavigation>
                    <IconButton
                        color="inherit"
                        aria-label="Open Mobile Navigation"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        sx={{ display: { md: "none" } }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Drawer handleDrawerToggle={setMobileOpen} mobileOpen={mobileOpen} pages={pages}/>
                </StyledToolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar