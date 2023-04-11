import React, { useState } from 'react'
import { Box, Typography, Button, Stack, Checkbox } from '@mui/material'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CustomersTable from './CustomersTable';


const CustomersContent = () => {
    const [action, setAction] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [area, setArea] = useState('');
    const [balance, setBalance] = useState('');

    const handleChange = (event: any) => {
        setAction(event.target.value);
    };
    const handleDate = (event: any) => {
        setDate(event.target.value);
    };
    const handleStatus = (event: any) => {
        setStatus(event.target.value);
    };
    const handleArea = (event: any) => {
        setArea(event.target.value);
    };
    const handleBalance = (event: any) => {
        setBalance(event.target.value);
    };

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            position: 'relative'
        }}>
            <Box sx={{
                width: '100%', height: '319px', px: '20px', py: '25px',
                background: 'linear-gradient(to bottom, rgba(247, 148, 29, 0) 16.34%, #F7941D 100%)'
            }}>
                <Box>
                    <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Customers</Typography>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Button variant='outlined' startIcon={<PersonAddAltOutlinedIcon />}
                            sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}>Add New Customers</Button>
                        <Button variant='outlined' startIcon={<SystemUpdateAltOutlinedIcon />}
                            sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}>Import Customers</Button>
                    </Box>
                </Box>
            </Box>
            <Stack direction='column' justifyContent='center' alignItems='center' padding='1rem' width='100%' position='absolute' top='55%' gap='2rem'>
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%' }}>
                    <Box sx={{ bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0' }}>
                        <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Filters And Option</Typography>
                    </Box>
                    <Stack padding='1rem' gap='10px'>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
                                <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Bulk Action</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={action}
                                    label="Bulk Action"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant='outlined'
                                sx={{ height: '40px', textTransform: 'capitalize', border: '1px solid #0C3547', color: 'black', fontSize: '16px' }}>
                                Apply (0)
                            </Button>
                            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Select Date Follow Up</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={date}
                                    label="Select Date Follow Up"
                                    onChange={handleDate}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                                <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Select Status</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={status}
                                    label="Select Status"
                                    onChange={handleStatus}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                                <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Select Area</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={area}
                                    label="Select Area"
                                    onChange={handleArea}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Select Balance</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={balance}
                                    label="Select Balance"
                                    onChange={handleBalance}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack direction='row' justifyContent='space-between' gap='2rem' px='5px'>
                            <Paper component="form" sx={{
                                height: '40px', display: 'flex', alignItems: 'center', width: '50%', bgcolor: '#F8F8F8'
                            }}>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search For..."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="button" sx={{ height: 'fit-content', color: 'white', bgcolor: '#0C3547', borderRadius: '2px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                            <Box sx={{ display: 'flex', gap: '20px', width: '50%' }}>
                                <Paper component="form" sx={{
                                    height: '40px', display: 'flex', alignItems: 'center', width: '100%', bgcolor: '#F8F8F8'
                                }}>
                                    <InputBase
                                        sx={{ ml: 1, flex: 1, textTransform: 'capitalize' }}
                                        placeholder="Select Date For Renewal/Expired"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                </Paper>
                                <IconButton type="button" sx={{ px: '5%', height: 'fit-content', width: 'fit-content', color: 'white', bgcolor: '#0C3547', borderRadius: '2px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                    <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>Reset</Typography>
                                </IconButton>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', py: '10px', borderRadius: '10px 10px 0 0' }}>
                        <Typography sx={{ fontWeight: '600', fontSize: '16px', textTransform: 'capitalize' }}>Customer List</Typography>
                        <Button startIcon={<FileDownloadOutlinedIcon />} sx={{ textTransform: 'capitalize', color: 'white', bgcolor: '#63C78B', '&:hover': { background: '#63C78B' } }}>Download Excel</Button>
                    </Box>
                    <Stack padding='1rem'>
                        <CustomersTable />
                    </Stack>
                </Stack>
            </Stack >
        </Box >
    )
}

export default CustomersContent
