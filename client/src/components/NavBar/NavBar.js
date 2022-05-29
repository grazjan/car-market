import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Container, Toolbar, Typography } from '@mui/material';

import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { StyledLogo } from './styled';
import { Box } from '@mui/system';

const pages = ['Search', 'Sell', 'About']

const NavBar = () => {
  return (
    <AppBar position="static" color="default">
        <Container maxWidth="xl">
            <Toolbar>
                <StyledLogo>
                    <Link to="/">
                        <img src={Logo} alt="Car Market Logo" title="Car Market" />
                    </Link>
                </StyledLogo>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Link
                            key={page} 
                            to="/"
                        >
                            {page}
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default NavBar