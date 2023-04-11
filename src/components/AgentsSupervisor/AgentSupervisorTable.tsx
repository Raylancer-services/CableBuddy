import React from 'react'
import { Box, Typography, Button, Stack, Checkbox } from '@mui/material'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { agentTableRow } from '../../MockData/AgentTableData';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '10px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    width: 'auto',
                    height: 'unset',
                },
            },
        },
    },
});

const AgentSupervisorTable = () => {
    return (
        <ThemeProvider theme={theme}>
            <TableContainer sx={{ border: '1px solid #D8D8D8' }}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow sx={{ borderBottom: '1px solid #D8D8D8' }}>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>S.No</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Mobile</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', color: '#59B6EA' }}>Total Collection</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', color: '#59B6EA' }}>Monthly Total Collection</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', color: '#59B6EA' }}>Total Collection</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', color: '#59B6EA' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {agentTableRow.map((row, index) => (
                            <TableRow key={row.name} sx={{ height: '30px', bgcolor: index % 2 == 0 ? '#F8F8F8' : undefined }}>
                                <TableCell sx={{ fontWeight: '600', fontSize: '12px', borderRight: '1px solid #D8D8D8' }}>
                                    {row.sno}
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '12px', color: '#59B6EA' }}>{row.name}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    <Typography sx={{ width: 'fit-content', fontWeight: '400', fontSize: '12px', color: '#59B6EA' }}>
                                        {row.mobile}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    <Typography sx={{ width: 'fit-content', fontWeight: '400', fontSize: '12px', color: '#59B6EA' }}>
                                        {row.totalCollection}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    <Typography sx={{ width: 'fit-content', fontWeight: '400', fontSize: '12px', color: '#59B6EA' }}>
                                        {row.monthlycollection}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    <Typography sx={{ width: 'fit-content', fontWeight: '400', fontSize: '12px', color: '#59B6EA' }}>
                                        {row.totalCollectionDetail}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Button sx={{ width: 'fit-content', fontWeight: '400', fontSize: '12px', textTransform: 'capitalize', bgcolor: '#A5A4A4', color: 'white', py: 0, px: 0, mr: '5px', '&:hover': { background: '#A5A4A4' } }}>Detail</Button>
                                    <Button sx={{ width: 'fit-content', fontWeight: '400', fontSize: '12px', textTransform: 'capitalize', bgcolor: '#A5A4A4', color: 'white', py: 0, px: 0, '&:hover': { background: '#A5A4A4' } }}>Login</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    )
}

export default AgentSupervisorTable
