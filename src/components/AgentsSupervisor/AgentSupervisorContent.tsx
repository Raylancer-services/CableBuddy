import React, { useState } from 'react'
import { Box, Typography, Button, Stack, Paper, Autocomplete, TextField } from '@mui/material'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CustomersTable from '../Customers/CustomersTable';
import ProductsTable from '../Products/ProductsTable';
import AgentSupervisorTable from './AgentSupervisorTable';

const AgentSupervisorContent = () => {
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            position: 'relative'
        }}>
            <Box sx={{ width: '100%', height: '319px', px: '20px', py: '25px', background: 'linear-gradient(to bottom, rgba(247, 148, 29, 0) 16.34%, #F7941D 100%)' }}>
                <Box>
                    <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Agents/Supervisor</Typography>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Button variant='outlined' startIcon={<SupportAgentOutlinedIcon />}
                            sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}>add new agent
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Stack direction='column' justifyContent='center' alignItems='center' padding='1rem' width='100%' position='absolute' top='60%' gap='2rem'>
                <Stack sx={{ borderRadius: '10px', width: '100%', gap: '20px' }}>
                    <Stack direction='row' gap='2%'>
                        <Paper elevation={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', height: '126px', padding: '20px', flex: 1, bgcolor: 'white', borderRadius: '8px' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px', color: '#0C3547' }}>10</Typography>
                            <Typography>Agent Allowed</Typography>
                            <SupportAgentOutlinedIcon sx={{ position: 'absolute', right: 10, top: 30, fontSize: '60px', color: '#0C3547' }} />
                        </Paper>
                        <Paper elevation={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', height: '126px', padding: '20px', flex: 1, bgcolor: 'white', borderRadius: '8px' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px', color: '#0C3547' }}>10</Typography>
                            <Typography>Agent Used</Typography>
                            <SupportAgentOutlinedIcon sx={{ position: 'absolute', right: 10, top: 30, fontSize: '60px', color: '#0C3547' }} />
                        </Paper>
                        <Paper elevation={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', height: '126px', padding: '20px', flex: 1, bgcolor: '#0C3547', color: 'white', borderRadius: '8px' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Get Agents</Typography>
                            <AddCircleOutlinedIcon sx={{ fontSize: '60px' }} />
                        </Paper>
                    </Stack>
                    <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px' }}>
                        <Box sx={{ bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0' }}>
                            <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Filters And Option</Typography>
                        </Box>
                        <Stack direction='row' justifyContent='space-between' gap='2rem' px='1rem' py='20px'>
                            <Box sx={{ height: '40px', display: 'flex', alignItems: 'center', width: '100%', bgcolor: '#F8F8F8', border: '1px solid #D8D8D8' }}>
                                <InputBase
                                    sx={{ ml: 2, flex: 1 }}
                                    placeholder="9720940484"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="button" sx={{ height: 'fit-content', px: '18px', color: 'white', bgcolor: '#0C3547', borderRadius: '2px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', py: '10px', borderRadius: '10px 10px 0 0' }}>
                            <Box sx={{ bgcolor: '#59B6EA', color: 'white', fontWeight: '600', fontSize: '16px', px: '10px', py: '5px', borderRadius: '4px' }}>General Details</Box>
                            <Typography sx={{ fontWeight: '600', fontSize: '16px', textTransform: 'capitalize' }}>Present/Absent</Typography>
                        </Box>
                        <Stack padding='1rem'>
                            <AgentSupervisorTable />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack >
        </Box >
    )
}

export default AgentSupervisorContent
