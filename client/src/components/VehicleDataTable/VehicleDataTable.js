import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { StyledTableRow, StyledThCell } from './styled';
import moment from 'moment';
import { Typography } from '@mui/material';

// Create table rows helper function
const createRow = (name, data) => {
  return (
    <StyledTableRow>
      <StyledThCell component="th" scope="row">
        {name ? name : "Unknown"}
      </StyledThCell>
      <TableCell component="th" scope="row">
        {data ? data : "Unknown"}
      </TableCell>
    </StyledTableRow>
  )
}

const VehicleDataTable = ({ vehicle }) => {
  return (
    <TableContainer>
      <Typography sx={{ marginBottom: "1rem" }} variant="h4" component="h2">Technical Data</Typography>
      <Table aria-label="vehicle data table">
        <TableBody>
          
          {/* Brand */}
          {createRow("Brand", vehicle.name)}

          {/* Model */}
          {createRow("Model", vehicle.model)}

          {/* Mileage */}
          {createRow("Mileage", vehicle.mileage + " km")}

          {/* Fuel */}
          {createRow("Fuel", vehicle.fuel)}

          {/* Horse Power */}
          {createRow("HP", vehicle.brand)}

          {/* Production year */}
          {createRow("Production year", moment(vehicle.year).format('YYYY'))}

          {/* Condition / Damaged */}
          {createRow("Damaged", vehicle.damaged)}

          {/* Owners */}
          {createRow("Owner", vehicle.owners)}

          {/* Owners */}
          {createRow("Transmission", vehicle.transmission)}

        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default VehicleDataTable