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
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { rows } from '../../MockData/CustomersTableData';
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


const CustomersTable = () => {
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
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Hardware</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Balance</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Area</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>List Bill Amount</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Expired</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', textAlign: 'center' }}>
                                <SettingsOutlinedIcon />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.name} sx={{ bgcolor: index % 2 == 0 ? '#F8F8F8' : undefined }}>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8', padding: 0 }}>
                                    <Checkbox />
                                </TableCell>
                                <TableCell sx={{ fontWeight: '400', fontSize: '12px', borderRight: '1px solid #D8D8D8' }}>
                                    {row.scode}
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    <Typography sx={{ fontWeight: '500', fontSize: '12px', color: '#59B6EA' }}>{row.name}</Typography>
                                    <Typography sx={{ display: 'flex', fontWeight: '300', fontSize: '12px', color: '#A5A4A4' }}>
                                        Mobile :  <Typography sx={{ fontWeight: '300', fontSize: '12px' }}>{row.mobile}</Typography>
                                    </Typography>
                                    <Typography sx={{ display: 'flex', fontWeight: '300', fontSize: '12px', color: '#A5A4A4' }}>
                                        Address :  <Typography sx={{ fontWeight: '300', fontSize: '12px' }}>{row.address}
                                        </Typography>
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    <Typography sx={{ display: 'flex', fontWeight: '300', fontSize: '12px', color: '#A5A4A4' }}>
                                        STB:  <Typography sx={{ fontWeight: '300', fontSize: '12px' }}>{row.stb}</Typography>
                                    </Typography>
                                    <Typography sx={{ display: 'flex', fontWeight: '300', fontSize: '12px', color: '#A5A4A4' }}>
                                        Card :  <Typography sx={{ fontWeight: '300', fontSize: '12px' }}>{row.card}
                                        </Typography>
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ display: 'flex', alignItems: 'center', padding: '30px', borderRight: '1px solid #D8D8D8' }}>
                                    <CurrencyRupeeOutlinedIcon sx={{ fontSize: '20px', color: '#A5A4A4' }} />
                                    <Typography>{row.balance}</Typography>
                                </TableCell>
                                <TableCell sx={{ color: '#A5A4A4', borderRight: '1px solid #D8D8D8' }}>{row.area}</TableCell>
                                <TableCell sx={{ display: 'flex', alignItems: 'center', padding: '30px', borderRight: '1px solid #D8D8D8' }}>
                                    <CurrencyRupeeOutlinedIcon sx={{ fontSize: '20px', color: '#A5A4A4' }} />
                                    <Typography>{row.listbillamount}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>{row.expired}</TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    <Typography sx={{ fontWeight: '400', fontSize: '12px', bgcolor: '#63C78B', color: 'white', px: '8px', py: '5px', borderRadius: '3px' }}>Active</Typography>
                                </TableCell>
                                <TableCell>
                                    <Button endIcon={<ArrowDropDownOutlinedIcon />} sx={{ fontWeight: '400', fontSize: '12px', textTransform: 'capitalize', bgcolor: '#A5A4A4', color: 'white', py: '4px', '&:hover': { background: '#A5A4A4' } }}>Detail</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    )
}

export default CustomersTable
