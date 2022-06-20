import { Box, Menu, MenuItem, MenuList } from '@mui/material'
import { StyledDrawer } from '../styled';

const Drawer = ({ pages, mobileOpen, handleDrawerToggle, window }) => {

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <StyledDrawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={() => handleDrawerToggle(!mobileOpen)}
            ModalProps={{
                keepMounted: true, 
            }}
        >
            <MenuList>
                {pages.map((page, index) => (
                    <MenuItem key={index}>
                        {page}
                    </MenuItem>
                ))}
            </MenuList>
        </StyledDrawer>
    )
}

export default Drawer