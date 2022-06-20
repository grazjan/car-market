import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Container, Toolbar, Typography } from '@mui/material';

import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { StyledLogo, StyledNavigation, StyledToolbar } from './styled';

const pages = ['Search', 'Sell', 'About']

const NavBar = () => {
  return (
    <AppBar position="static" color="default">
        <Container maxWidth="xl">
            <StyledToolbar>
                <StyledLogo>
                    <Link to="/">
                        <img src={Logo} alt="Car Market Logo" title="Car Market" />
                    </Link>
                </StyledLogo>
                <StyledNavigation itemType="http://www.schema.org/SiteNavigationElement" itemScope aria-label='Main Navigation'>
                    {pages.map((page) => (
                        <Link
                            key={page} 
                            to="/"
                            itemProp='url'
                            role='menuItem'
                            className="menu-item"
                        >
                            {page}
                        </Link>
                    ))}
                </StyledNavigation>
            </StyledToolbar>
        </Container>
    </AppBar>
  )
}

export default NavBar