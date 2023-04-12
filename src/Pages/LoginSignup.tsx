import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Button, Checkbox, FormControl, FormControlLabel, MenuItem, Stack, Tab, Tabs, TextField, ThemeProvider, createTheme } from '@mui/material'
import { useState } from 'react'
import CBlogo from '../assets/Images/CBlogo.png'
import Image from '../components/Image'
import { useNavigate } from 'react-router-dom'


const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#F7941D',
        },
      },
    },
  },
});


const LoginSignup = () => {
  const [value, setValue] = useState('2');
  const [cable, setCable] = useState('cable');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const handleCableChange = (event: any) => {
    setCable(event.target.value)
  }

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard')
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(#0C3547 62.68%, rgba(12, 53, 71, 0.83) 98.96%)', width: '100%', height: '100vh' }}>
        <Box sx={{ bgcolor: 'white', borderRadius: '12px', width: '35%', height: 'fit-content' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label='Tabs' onChange={handleChange} textColor='primary' sx={{ '& .MuiTab-textColorPrimary': { color: 'black', fontWeight: '500', fontSize: '18px', '&:active': { color: 'black' } } }}>
                <Tab label='Login' value='1' sx={{ width: '50%' }} />
                <Tab label='Signup' value='2' sx={{ width: '50%' }} />
              </TabList>
            </Box>
            {/* .........................login...................... */}
            <TabPanel value='1'>
              <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                <Image src={CBlogo} alt='CBLogo' sx={{ width: '30%' }} />
                <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <TextField placeholder='Mobile Number' />
                  <TextField placeholder='Password' />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Password" sx={{ width: 'fit-content', my: '0px', color: '#A5A4A4', '& .MuiCheckbox-root': { py: 0 } }} />
                  <Button variant='outlined' onClick={handleLogin} sx={{ fontWeight: '500', py: '10px', borderRadius: '8px', width: '70%', mx: 'auto', my: '10px', bgcolor: '#F7941D', color: '#0C3547', border: 'none', '&:hover': { bgcolor: '#F7941D', color: '#0C3547', border: 'none' } }}>LOGIN</Button>
                </FormControl>
              </Stack>
            </TabPanel>
            {/* .....................signup..................... */}
            <TabPanel value='2'>
              <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                <Image src={CBlogo} alt='CBLogo' sx={{ width: '30%' }} />
                <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <TextField select value={cable} onChange={handleCableChange} fullWidth>
                    <MenuItem value='cable'>Cable</MenuItem>
                    <MenuItem value='cable-2'>Cable 2</MenuItem>
                    <MenuItem value='cable-3'>Cable 3</MenuItem>
                  </TextField>
                  <TextField placeholder='Mobile Number' />
                  <TextField placeholder='Password' />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Password" sx={{ width: 'fit-content', my: '0px', color: '#A5A4A4', '& .MuiCheckbox-root': { py: 0 } }} />
                  <Button variant='outlined' onClick={handleLogin} sx={{ fontWeight: '500', py: '10px', borderRadius: '8px', width: '70%', mx: 'auto', my: '10px', bgcolor: '#F7941D', color: '#0C3547', border: 'none', '&:hover': { bgcolor: '#F7941D', color: '#0C3547', border: 'none' } }}>SignUp</Button>
                </FormControl>
              </Stack>
            </TabPanel>
          </TabContext>
        </Box >
      </Box >
    </ThemeProvider>
  )
}

export default LoginSignup
