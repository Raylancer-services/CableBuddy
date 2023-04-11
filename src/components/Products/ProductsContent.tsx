import React, { useState } from 'react'
import { Box, Typography, Button, Stack, Checkbox, Autocomplete, TextField } from '@mui/material'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ProductsTable from './ProductsTable';


const ProductsContent = () => {
    const [packagetype, setPackagetype] = useState('');

    const handlePackage = (event: any) => {
        setPackagetype(event.target.value);
    };

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            position: 'relative'
        }}>
            <Box sx={{ width: '100%', height: '319px', px: '20px', py: '25px', background: 'linear-gradient(to bottom, rgba(247, 148, 29, 0) 16.34%, #F7941D 100%)' }}>
                <Box>
                    <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Products</Typography>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Button variant='outlined' startIcon={<AddIcon />}
                            sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}>add new channerl/bouguet</Button>
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
                        <Stack>
                            <Stack direction='row' alignItems='center'>
                                <FormControl sx={{ m: 1, width: '100%' }} size="small">
                                    <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Select Date Follow Up</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={packagetype}
                                        label="Select Package Type"
                                        onChange={handlePackage}
                                    >
                                        <MenuItem value={10}>Package Type-1</MenuItem>
                                        <MenuItem value={10}>Package Type-2</MenuItem>
                                        <MenuItem value={10}>Package Type-3</MenuItem>
                                    </Select>
                                </FormControl>
                                <IconButton type="button" sx={{ px: '3%', height: 'fit-content', width: 'fit-content', color: 'white', bgcolor: '#0C3547', borderRadius: '2px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                    <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>Reset</Typography>
                                </IconButton>
                            </Stack>
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
                </Stack>
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', py: '10px', borderRadius: '10px 10px 0 0' }}>
                        <Typography sx={{ fontWeight: '600', fontSize: '16px', textTransform: 'capitalize' }}>Products</Typography>
                        <Button startIcon={<FileDownloadOutlinedIcon />} sx={{ textTransform: 'capitalize', color: 'white', bgcolor: '#63C78B', py: '5px', '&:hover': { background: '#63C78B' } }}>Download Excel</Button>
                    </Box>
                    <Stack padding='1rem'>
                        <ProductsTable />
                    </Stack>
                </Stack>
            </Stack >
        </Box >
    )
}

export default ProductsContent
