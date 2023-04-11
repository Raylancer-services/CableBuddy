import React, { useState } from 'react'
import { Box, Typography, Button, Stack, Link, Paper, Pagination } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ComplaintsTable from './ComplaintsTable';

const ComplaintsContent = () => {
    const [agent, setAgent] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');

    const handleAgent = (event: any) => {
        setAgent(event.target.value);
    };
    const handleStatus = (event: any) => {
        setStatus(event.target.value);
    };
    const handleDate = (event: any) => {
        setDate(event.target.value);
    };

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            position: 'relative'
        }}>
            <Box sx={{ width: '100%', height: '319px', px: '20px', py: '25px', background: 'linear-gradient(to bottom, rgba(247, 148, 29, 0) 16.34%, #F7941D 100%)' }}>
                <Box>
                    <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>
                        Complaints
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Button variant='outlined' startIcon={<PersonAddAltOutlinedIcon />}
                            sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}>
                            Add complaints
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Stack direction='column' justifyContent='center' alignItems='center' padding='1rem' width='100%' position='absolute' top='55%' gap='2rem'>
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%', padding: '1rem', gap: '10px' }}>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <FormControl sx={{ m: 1, minWidth: '26%' }} size="small">
                            <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Select Agent</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={agent}
                                label="Bulk Action"
                                onChange={handleAgent}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: '26%' }} size="small">
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
                        <FormControl sx={{ m: 1, minWidth: '26%' }} size="small">
                            <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Select Date</InputLabel>
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
                        <IconButton type="button" sx={{ px: '4%', height: 'fit-content', width: 'fit-content', color: 'white', bgcolor: '#0C3547', borderRadius: '3px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                            <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>Reset</Typography>
                        </IconButton>
                    </Stack>
                    <Stack direction='row' justifyContent='space-between' gap='2rem' px='5px'>
                        <Box sx={{ height: '40px', display: 'flex', alignItems: 'center', width: '100%', bgcolor: '#F8F8F8', border: '1px solid #D8D8D8' }}>
                            <InputBase
                                sx={{ ml: 2, flex: 1 }}
                                placeholder="Search For..."
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="button" sx={{ height: 'fit-content', px: '18px', color: 'white', bgcolor: '#0C3547', borderRadius: '2px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    </Stack>
                </Stack>
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', py: '10px', borderRadius: '10px 10px 0 0' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: '16px', textTransform: 'capitalize' }}>Queries</Typography>
                    </Box>
                    <Stack padding='1rem'>
                        <ComplaintsTable />
                    </Stack>
                    <Box sx={{ display: 'flex', justifyContent: 'end', border: '1px solid #D8D8D8', padding: '14px', borderRadius: '0 0 0 0' }}>
                        <Pagination count={10} variant="outlined" shape="rounded" color="primary" />
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ComplaintsContent
