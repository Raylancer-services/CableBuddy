import React from 'react'
import { Box, Typography } from '@mui/material'
import Cablebuddylogo from '../../assets/Images/CablebuddyLogo.png'
import Image from '../Image'
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <Box sx={{ bgcolor: '#0C3547', width: '100%', height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: '10px' }}>
            <Image src={Cablebuddylogo} alt='cablebuddy' sx={{ height: '50px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Icon icon="carbon:logo-youtube" color='red' width='2rem' />
                    <Typography sx={{ fontWeight: '500', fontSize: '16px', color: 'white' }}>Youtube</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:bell-outline" color='white' />
                    <Icon icon="gridicons:dropdown" color='white' width='20px' />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: '400', fontSize: '16px', color: 'white' }}>Kk Cable Networks</Typography>
                    <Icon icon="gridicons:dropdown" color='white' width='20px' />
                </Box>
            </Box>
        </Box>
    )
}

export default Header
