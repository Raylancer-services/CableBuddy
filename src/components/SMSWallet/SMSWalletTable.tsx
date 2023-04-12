import React from 'react'
import { Box, Typography, Button, Stack, Checkbox } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SmsRowTableData } from "../../MockData/SmsRowTableData";

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


const SMSWalletTable = () => {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer sx={{ border: '1px solid #D8D8D8' }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ borderBottom: '1px solid #D8D8D8' }}>
              <TableCell sx={{ borderRight: '1px solid #D8D8D8', padding: 0 }}>
                <Checkbox />
              </TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>S.CODE</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Mobile No</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Area</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Expiry</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Balance Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SmsRowTableData?.map((row) => (
              <TableRow sx={{ borderBottom: 'none' }}>
                <TableCell sx={{ borderRight: '1px solid #D8D8D8', padding: 0 }}>
                  <Checkbox />
                </TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, color: '#59B6EA' }}
                >{row.scode}</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '3px', xl: '10px' }, textTransform: 'capitalize' }}>{row.name}</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>{row.mobileno}</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>{row.area}</TableCell>
                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                  <Typography sx={{width: 'fit-content', fontWeight: '400', fontSize: '12px', bgcolor: '#63C78B', color: 'white', px: '8px', py: '5px', borderRadius: '3px' }}>Active</Typography>
                </TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>{row.expiry}</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>{row.balanceamount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  )
}

export default SMSWalletTable
