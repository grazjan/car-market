import { Modal, Typography } from '@mui/material'
import { StyledForm, StyledPopup } from './styled';


const Popup = ({ handleTogglePopup, isOpen }) => {

    return (
        <Modal
            open={isOpen}
            onClose={() => handleTogglePopup(false)}
            aria-labelledby="Modal"
        >
            <StyledPopup>
                <Typography variant="h4">Advanced Search</Typography>
                <StyledForm>

                </StyledForm>
            </StyledPopup>
        </Modal>
    )
}

export default Popup