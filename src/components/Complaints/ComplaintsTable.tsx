import React, { useState } from 'react'
import { Box, Typography, Button, Stack, Checkbox } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { complaintRows } from '../../MockData/ComplaintTableData';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '10px',
          paddingTop: '0px',
          paddingBottom: '0px',
          width: 'auto',
          height: 'unset',
        },
      },
    },
  },
});


const ComplaintsTable = () => {
  const [value, setValue] = useState('Open');

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const openclose = ['Open', 'Close']

  return (
    <ThemeProvider theme={theme}>
      <TableContainer sx={{ border: '1px solid #D8D8D8', width: '100%', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <Table sx={{ width: '140%' }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ borderBottom: '1px solid #D8D8D8' }}>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Mobile No</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Address</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Message</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Agent</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Start Date</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', textAlign: 'center', borderRight: '1px solid #D8D8D8' }}>Last Update Date</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', textAlign: 'center' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaintRows.map((row, index) => (
              <TableRow key={row.name} sx={{ bgcolor: index % 2 == 0 ? '#F8F8F8' : undefined, borderBottom: '1px solid #D8D8D8' }}>
                <TableCell sx={{ fontWeight: '400', fontSize: '12px', borderRight: '1px solid #D8D8D8' }}>{row.sno}</TableCell>
                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                  <Typography sx={{ fontWeight: '500', fontSize: '12px', color: '#59B6EA', }}>{row.name}</Typography>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                  <Typography sx={{ fontWeight: '300', fontSize: '12px' }}>{row.mobile}</Typography>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                  <Typography sx={{ fontWeight: '300', fontSize: '12px' }}>{row.address}</Typography>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #D8D8D8', whiteSpace: 'normal', width: '15rem' }}>
                  <Typography sx={{ fontWeight: '300', fontSize: '12px' }}>{row.message}</Typography>
                </TableCell>
                <TableCell sx={{ display: 'flex', alignItems: 'center', padding: '30px', borderBottom: '0', borderRight: '1px solid #D8D8D8' }}>
                  <Select
                    value={value}
                    onChange={handleChange}
                    sx={{ borderRadius: '25px', height: '32px', width: '6rem' }}>
                    <MenuItem value='Open'>Open</MenuItem>
                    <MenuItem value='Close'>Close</MenuItem>
                  </Select>
                </TableCell>
                <TableCell sx={{ color: '#A5A4A4', borderRight: '1px solid #D8D8D8' }}>
                  <Select
                    value={value}
                    onChange={handleChange}
                    sx={{ borderRadius: '25px', height: '32px', width: '6rem' }}>
                    <MenuItem value='Open'>Open</MenuItem>
                    <MenuItem value='Close'>Close</MenuItem>
                  </Select>
                </TableCell>
                <TableCell sx={{ display: 'flex', alignItems: 'center', padding: '30px', borderRight: '1px solid #D8D8D8' }}>
                  <Typography>{row.startdate}</Typography>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>{row.lastdate}</TableCell>
                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                  <Typography sx={{ fontWeight: '400', fontSize: '12px', padding: '5px', bgcolor: '#A5A4A4', color: 'white', borderRadius: '3px' }}>Delete</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider >
  )
}

export default ComplaintsTable
