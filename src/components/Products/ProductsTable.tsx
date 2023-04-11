import React from 'react'
import { Box, Typography, Button, Stack, Checkbox } from '@mui/material'
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MoreIcon from '@mui/icons-material/More';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { rows } from '../../MockData/ProductsTableData';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '10px',
          paddingTop: '5px',
          paddingBottom: '5px',
          width: 'auto',
          height: 'unset',
        },
      },
    },
  },
});


const ProductsTable = () => {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer sx={{ border: '1px solid #D8D8D8' }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ borderBottom: '1px solid #D8D8D8' }}>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Rate</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.name} sx={{ height: '30px', bgcolor: index % 2 == 0 ? '#F8F8F8' : undefined }}>
                <TableCell sx={{ fontWeight: '400', fontSize: '12px', borderRight: '1px solid #D8D8D8', color: '#A5A4A4' }}>
                  {row.sno}
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                  <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: '#59B6EA' }}>{row.name}</Typography>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'white', bgcolor: '#0C3547', width: 'fit-content', gap: '4px', padding: '2px', borderRadius: '4px' }}>
                    <MoreIcon sx={{ fontSize: '16px' }} /><Typography sx={{ fontWeight: '400', fontSize: '12px' }}>{row.rate}</Typography> + <Typography sx={{ fontWeight: '400', fontSize: '12px' }}>0%</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                  <Typography sx={{ width: 'fit-content', fontWeight: '400', fontSize: '12px', bgcolor: '#63C78B', color: 'white', px: '8px', py: '5px', borderRadius: '3px' }}>Active</Typography>
                </TableCell>
                <TableCell>
                  <Button endIcon={<ArrowDropDownOutlinedIcon />} sx={{ width: 'fit-content', fontWeight: '400', fontSize: '12px', textTransform: 'capitalize', bgcolor: '#A5A4A4', color: 'white', py: '4px', '&:hover': { background: '#A5A4A4' } }}>Detail</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  )
}

export default ProductsTable
