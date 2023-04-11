import { useState } from 'react';
import { Box, Typography, Button, Stack, InputAdornment, IconButton, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ChatIcon from '@mui/icons-material/Chat';


const activeTabStyle = {
    backgroundColor: '#59B6EA',
    color: 'white',
    height: '2rem',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: '#59B6EA',
        color: 'white',
    }
};

const unactiveStyle = {
    color: 'black',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: 'white',
    }
}
const SMSWalletContent = () => {
    const [activeTab, setActiveTab] = useState('Sent SMS')

    const [status, setStatus] = useState('');
    const [area, setArea] = useState('');
    const [balance, setBalance] = useState('');
    const [expiry, setExpiry] = useState('');
    const [date, setDate] = useState('');


    const handleStatus = (event: any) => {
        setStatus(event.target.value);
    };
    const handleArea = (event: any) => {
        setArea(event.target.value);
    };
    const handleBalance = (event: any) => {
        setBalance(event.target.value);
    };
    const handleExpiry = (event: any) => {
        setExpiry(event.target.value)
    }
    const handleDate = (event: any) => {
        setDate(event.target.value);
    };
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            position: 'relative'
        }}>
            <Box sx={{ width: '100%', height: '319px', px: '20px', py: '25px', background: 'linear-gradient(to bottom, rgba(247, 148, 29, 0) 16.34%, #F7941D 100%)' }}>
                <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>SMS/Wallet</Typography>
                <Typography sx={{ color: 'white', fontWeight: '400', fontSize: '48px' }}>Total Balance <Typography component='span' sx={{ fontWeight: '400', fontSize: '48px', color: 'black' }}>2887.00</Typography></Typography>
            </Box>
            <Stack direction='column' justifyContent='center' alignItems='center' padding='1rem' width='100%' position='absolute' top='75%' gap='2rem' >
                <Stack sx={{ width: '100%', bgcolor: 'white', border: '1px solid #D8D8D8', borderRadius: '12px' }}>
                    <Stack direction='row' gap='10px' sx={{ border: '1px solid #D8D8D8', px: '1rem', py: '5px', borderRadius: '10px 10px 0 0' }}>
                        <Stack direction='row' alignItems='center' gap='10px'>
                            <Button onClick={() => { setActiveTab('Sent SMS') }}
                                sx={activeTab === 'Sent SMS' ? activeTabStyle : unactiveStyle}>Sent SMS</Button>
                            <Button onClick={() => { setActiveTab('Sms Templates') }}
                                sx={activeTab === 'Sms Templates' ? activeTabStyle : unactiveStyle}>SMS Templates And Tags</Button>
                            <Button onClick={() => { setActiveTab('Sms Report') }}
                                sx={activeTab === 'Sms Report' ? activeTabStyle : unactiveStyle}>SMS Delivery Report</Button>
                        </Stack>
                    </Stack>
                    <Stack direction='row' gap='3%' sx={{ padding: '1rem' }}>
                        <TextField sx={{ width: '100%' }}
                            value='Select Message Template'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        <ArrowDropDownIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <Stack direction='column' gap='10px' sx={{ width: '100%' }}>
                            <TextField sx={{ bgcolor: '#F8F8F8' }}
                                id="outlined-multiline-flexible"
                                placeholder='Message'
                                multiline
                                rows={4}
                            />
                            <Typography sx={{ fontWeight: '400', fontSize: '12px' }}>Total Characters : <Typography component='span' sx={{ fontWeight: '500', fontSize: '12px', color: '#F7941D' }}>0</Typography></Typography>
                            <Typography sx={{ fontWeight: '400', fontSize: '12px' }}>Credit Used : <Typography component='span' sx={{ fontWeight: '500', fontSize: '12px', color: '#F7941D' }}>1</Typography></Typography>
                        </Stack>
                    </Stack>
                    <Stack direction='row' alignItems='center' padding='1rem' gap='1rem' justifyContent='end'>
                        <Typography sx={{ fontWeight: '400', fontSize: '12px' }}>Total sms credit used : <Typography component='span' sx={{ fontWeight: '500', fontSize: '12px', color: '#F7941D' }}>1</Typography></Typography>
                        <Button variant='outlined' sx={{
                            textTransform: 'capitalize', gap: '5px', bgcolor: '#63C78B', color: 'white', border: '1px solid #63F09B', '&:hover': { backgroundColor: '#63C78B', border: '1px solid #63F09B' }
                        }}>Send Message<ChatIcon /></Button>
                    </Stack>
                </Stack >
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%' }}>
                    <Box sx={{ bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0' }}>
                        <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Filters And Option</Typography>
                    </Box>
                    <Stack padding='1rem' gap='10px'>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>Total sms credit used : 0
                            </Typography>
                            <FormControl sx={{ m: 1, minWidth: '20%' }} size="small">
                                <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Select Balance</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={balance}
                                    label="Select Bala"
                                    onChange={handleBalance}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: '20%' }} size="small">
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
                            <FormControl sx={{ m: 1, minWidth: '20%' }} size="small">
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
                            <IconButton type="button" sx={{ px: '2%', height: 'fit-content', width: 'fit-content', color: 'white', bgcolor: '#0C3547', borderRadius: '4px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>Reset</Typography>
                            </IconButton>
                        </Stack>
                        <Stack direction='row' justifyContent='space-between' alignItems='center' gap='2rem' px='5px'>
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
                            <FormControl sx={{ m: 1, minWidth: '20%' }} size="small">
                                <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Select Expiry</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={expiry}
                                    label="Select Area"
                                    onChange={handleExpiry}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: '30%' }} size="small">
                                <InputLabel id="demo-select-small" sx={{textTransform: 'capitalize', color: 'black', fontWeight: '400', fontSize: '15px' }}>select date for renewal/expired</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={date}
                                    label="Select Area"
                                    onChange={handleDate}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack >
        </Box >
    )
}

export default SMSWalletContent
