import React from 'react'
import { Box, Typography, Paper, Stack, InputBase, IconButton, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

const CollectionTable = () => {
  return (
    <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px' }}>
      <Box sx={{ border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0', bgcolor: '#0C3547' }}>
        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: 'white' }}>11-March-2023</Typography>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>Customer</TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>Amount</TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>Discount</TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>Total Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ borderBottom: 'none' }}>
            <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>37</TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>12538</TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>0</TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>12538</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Stack direction='row' width='100%' padding='1rem' gap='1rem'>
        <Stack direction='column' gap='1rem'>
          <Stack sx={{ borderRadius: '10px', border: '1px solid #D8D8D8', height: 'fit-content' }}>
            <Box sx={{ py: '4px', px: '10px', borderRadius: '10px 10px 0 0' }}>
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>Gangineni</Typography>
            </Box>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px', textAlign: 'center' }}>Mode</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px', textAlign: 'center' }}>Customers</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px', textAlign: 'center' }}>Amount</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px', textAlign: 'center' }}>Discount</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px', textAlign: 'center' }}>Payment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ borderBottom: 'none' }}>
                  <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>BIX42</TableCell>
                  <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>1</TableCell>
                  <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>350</TableCell>
                  <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>0</TableCell>
                  <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>350</TableCell>
                </TableRow>
                <TableRow sx={{ borderBottom: 'none', bgcolor: '#F7941D' }}>
                  <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>Area Total</TableCell>
                  <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>1</TableCell>
                  <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>350</TableCell>
                  <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>0</TableCell>
                  <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>350</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Stack>
        </Stack>
        <Stack>
          <Box sx={{ border: '1px solid #D8D8D8', py: '10px', px: '10px', borderRadius: '10px 10px 0 0' }}>
            <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>Customer Details</Typography>
          </Box>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px' }}>Name</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px' }}>Area</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px' }}>Previous Balance</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px' }}>Paid Amount</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '5px', xl: '10px' }, fontWeight: '600', fontSize: '12px' }}>Discount</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px' }}>Current Balance</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px' }}>Collected Balance</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px' }}>STB-NO</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, fontWeight: '600', fontSize: '12px' }}>Card No</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ borderBottom: 'none' }}>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, color: '#59B6EA' }}
                >Nitesh Mishra Trimulashetty 3043</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '3px', xl: '10px' }, textTransform: 'capitalize' }}>sunnampadu</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>350</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>350</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>0</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>0</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>KK CABLE NETWORK</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '3px', xl: '10px' } }}>30449</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>DSNW27583350</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CollectionTable
