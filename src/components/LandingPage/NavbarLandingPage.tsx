import React, { useState } from 'react'
import CableBuddyLogo from '../../assets/Images/Cablebuddy.png'
import { AppBar, Box, Button, ButtonBase, Drawer, IconButton, MenuItem, Stack, TextField, Toolbar, Typography } from '@mui/material'
import Image from '../Image'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const theme = createTheme({
    components: {
        MuiToolbar: {
            styleOverrides: {
                gutters: {
                    padding: '0',
                },
            },
        },
    },
});

const selectStyles = {
    // '& .MuiTextField-root': {
    //     padding: '0px',
    // },
    '& .MuiInputBase-root': {
        height: { xs: '25px', md: '30px' },
    },
    '& .MuiOutlinedInput-input': {
        display: 'flex',
        color: '#F7941D',
        margin: '0px',
        fontSize: { xs: '11px', md: '14px', xl: '16px' },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #F7941D',
        padding: '0px'
    },
    '& .MuiSelect-icon': {
        color: '#F7941D',
    },
}
const MenubarLoginbutton = {
    '& .MuiTextField-root': {
        padding: '0px',
    },
    '& .MuiInputBase-root': {
        height: '30px',
    },
    '& .MuiOutlinedInput-input': {
        color: '#F7941D',
        fontSize: '14px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #F7941D',
    },
    '& .MuiSelect-icon': {
        color: '#F7941D',
    },
}

const NavbarLandingPage = () => {
    const [login, setLogin] = useState('Login')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const handleChange = (event: any) => {
        setLogin(event.target.value)
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar position='static' sx={{ bgcolor: 'white', px: '7%', py: { sm: '5px', xl: '16px' }, display: { xs: 'none', sm: 'block' } }}>
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ display: 'flex', alignItems: 'center', height: '100%', width: '30%' }}>
                            <Image src={CableBuddyLogo} alt='cablebuddy' sx={{ width: { xs: '100%', md: '80%' }, height: '80%' }} />
                        </Typography>
                        <Stack direction='row' spacing={{ xs: 2, md: 4 }}>
                            <Stack direction='row' spacing={{ xs: 2, md: 4 }}>
                                <ButtonBase sx={{ fontSize: { xs: '10px', md: '14px', xl: '16px' },px: '5px', color: 'black', textTransform: 'capitalize', '&:focus': { color: '#F7941D' } }}>Home</ButtonBase>
                                <ButtonBase sx={{ fontSize: { xs: '10px', md: '14px', xl: '16px' },px: '5px', color: 'black', textTransform: 'capitalize', '&:focus': { color: '#F7941D' } }}>About Us</ButtonBase>
                                <ButtonBase sx={{ fontSize: { xs: '10px', md: '14px', xl: '16px' },px: '5px', color: 'black', textTransform: 'capitalize', '&:focus': { color: '#F7941D' } }}>Blog</ButtonBase>
                                <ButtonBase sx={{ fontSize: { xs: '10px', md: '14px', xl: '16px' },px: '5px', color: 'black', textTransform: 'capitalize', '&:focus': { color: '#F7941D' } }}>Contact Us</ButtonBase>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <TextField select
                                    defaultValue="Login"
                                    size="small"
                                    value={login}
                                    onChange={handleChange}
                                    sx={selectStyles}
                                >
                                    <MenuItem value='Login'>Login</MenuItem>
                                    <MenuItem value='signup'>SignUp</MenuItem>
                                </TextField>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </ThemeProvider >
            <Stack sx={{ width: '100%', display: { xs: 'block', sm: 'none' } }}>
                <Stack direction='row' alignItems='center' width='100%' py='2%'>
                    <IconButton onClick={() => { setIsDrawerOpen(true) }}>
                        <MenuIcon />
                    </IconButton>
                    <Image src={CableBuddyLogo} alt='cablebuddy' sx={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
                </Stack>
                <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} >
                    <AppBar elevation={0} position='static' sx={{ width: '280px', bgcolor: 'white' }}>
                        <Toolbar disableGutters>
                            <Stack direction='column' spacing={3} width='100%'>
                                <Stack mt={4} px='1rem'>
                                    <Image src={CableBuddyLogo} alt='cablebuddy' sx={{ width: '70%' }} />
                                </Stack>
                                <Stack direction='column' spacing={2}>
                                    <List sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <ListItem disablePadding sx={{ width: '100%' }}>
                                            <ListItemButton disableRipple={false}>
                                                <ListItemText primary="Home" sx={{ '& .MuiListItemText-primary': { color: 'black', fontWeight: '500' } }} />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding sx={{ width: '100%' }}>
                                            <ListItemButton disableRipple={false}>
                                                <ListItemText primary="About Us" sx={{ '& .MuiListItemText-primary': { color: 'black', fontWeight: '500' } }} />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding sx={{ width: '100%' }}>
                                            <ListItemButton disableRipple={false}>
                                                <ListItemText primary="Blog" sx={{ '& .MuiListItemText-primary': { color: 'black', fontWeight: '500' } }} />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding sx={{ width: '100%' }}>
                                            <ListItemButton disableRipple={false}>
                                                <ListItemText primary="Contact Us" sx={{ '& .MuiListItemText-primary': { color: 'black', fontWeight: '500' } }} />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Stack>
                                <Stack direction='row' alignItems='center' px='1rem'>
                                    <TextField select
                                        defaultValue="Login"
                                        size="small"
                                        value={login}
                                        onChange={handleChange}
                                        sx={MenubarLoginbutton}
                                    >
                                        <MenuItem value='Login'>Login</MenuItem>
                                        <MenuItem value='signup'>SignUp</MenuItem>
                                    </TextField>
                                </Stack>
                            </Stack>
                        </Toolbar>
                    </AppBar>
                </Drawer>
            </Stack>


        </>
    )
}

export default NavbarLandingPage
