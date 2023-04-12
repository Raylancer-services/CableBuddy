import { useState } from 'react';
import { Box, Typography, Paper, Stack, InputBase, IconButton, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import CollectionTable from './CollectionTable';

const CollectionContent = () => {
    const [agent, setAgent] = useState('');

    const handleAgent = (event: any) => {
        setAgent(event.target.value);
    };

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            position: 'relative'
        }}>
            <Box sx={{ width: '100%', height: '319px', px: '20px', py: '25px', background: 'linear-gradient(to bottom, rgba(247, 148, 29, 0) 16.34%, #F7941D 100%)' }}>
                <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Collection</Typography>
            </Box>
            <Stack direction='column' justifyContent='center' alignItems='center' padding='1rem' width='100%' position='absolute' top='40%' gap='2rem' >
                <Stack sx={{ width: '100%', bgcolor: 'white', border: '1px solid #D8D8D8', borderRadius: '12px' }}>
                    <Box sx={{ border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0' }}>
                        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>Payment will reach to your bank account by 7pm to 7am</Typography>
                    </Box>
                    <Box sx={{ padding: '1rem' }}>
                        <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%' }}>
                            <Box sx={{ bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '12px', borderRadius: '10px 10px 0 0' }}>
                                <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>Filters And Option</Typography>
                            </Box>
                            <Stack padding='1rem' gap='10px'>
                                <Box sx={{ height: '40px', display: 'flex', alignItems: 'center', width: '100%', bgcolor: '#F8F8F8', border: '1px solid #D8D8D8' }}>
                                    <InputBase
                                        sx={{ ml: 2, flex: 1 }}
                                        placeholder="1 March 2023 to 31 March 2023"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', mt: '5px' }}>
                                    <FormControl sx={{ width: '100%' }} size="small">
                                        <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>
                                            Select Agent
                                        </InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={agent}
                                            label="Select Agent"
                                            onChange={handleAgent}
                                        >
                                            <MenuItem value={10}>Agent-1</MenuItem>
                                            <MenuItem value={10}>Agent-2</MenuItem>
                                            <MenuItem value={10}>Agent-3</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <IconButton type="button" sx={{ px: '3%', height: 'fit-content', width: 'fit-content', color: 'white', bgcolor: '#0C3547', borderRadius: '2px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                        <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>Reset</Typography>
                                    </IconButton>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                <Paper elevation={3} sx={{ display: 'flex', border: '1px solid #D8D8D8', bgcolor: 'white', width: '100%', height: '38px', padding: 0, borderRadius: '3px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#59B6EA', width: 'fit-content', height: '100%', fontWeight: '500', fontSize: '16px', px: '5px' }}>
                        <FormatListNumberedIcon sx={{ mr: '5px' }} />Summary
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', height: '100%', fontWeight: '500', fontSize: '16px', px: '5px' }}>
                        <PaymentsOutlinedIcon sx={{ mr: '5px' }} />Online Transaction
                    </Box>
                </Paper>
                <Stack width='100%' direction='column' border='1px solid #D8D8D8' borderRadius='10px'>
                    <Box sx={{ border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0', bgcolor: '#F5F5F5' }}>
                        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>Summary</Typography>
                    </Box>
                    <Stack direction='column' padding='1rem' gap='1rem'>
                        <Stack direction='row' gap='24px'>
                            <Stack justifyContent='center' alignItems='center' sx={{ height: '200px', flex: 1, border: '1px solid #D8D8D8', borderRadius: '8px' }}>
                                <Typography sx={{ fontWeight: '400', fontSize: '48px', color: '#F7941D' }}>₹ 294462</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '48px', color: '#0C3547' }}>Total Paid</Typography>
                            </Stack>
                            <Stack justifyContent='center' alignItems='center' sx={{ height: '200px', flex: 1, border: '1px solid #D8D8D8', borderRadius: '8px' }}>
                                <Typography sx={{ fontWeight: '400', fontSize: '48px', color: '#F7941D' }}>₹ 294462</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '48px', color: '#0C3547' }}>Total Payments</Typography>
                            </Stack>
                        </Stack>
                        <CollectionTable />
                    </Stack>
                </Stack>
            </Stack >
        </Box >
    )
}

export default CollectionContent
