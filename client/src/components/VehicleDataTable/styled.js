import styled from "@emotion/styled";
import { TableCell, TableRow } from "@mui/material";


/* Table row */
/* ****************************************** */

export const StyledTableRow = styled(TableRow)({
    '& th': {
        fontSize: "1.115rem" //18px
    }
})
  

/* Table cell */
/* ****************************************** */

export const StyledThCell = styled(TableCell)({
    fontWeight: "bold"
})
  