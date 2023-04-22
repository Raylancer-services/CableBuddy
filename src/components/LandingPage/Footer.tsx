import React from 'react'
import { Box, ButtonBase, Stack, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Cablebuddylogo from '../../assets/Images/Cablebuddy.png';
import Image from '../Image';

const Footer = () => {
    return (
        <>
            <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent='space-between' rowGap='4rem' sx={{ textTransform: 'capitalize', bgcolor: '#0C3547', width: '100%', borderRadius: { xs: '30px 30px 0 0', md: '100px 100px 0 0' }, px: '7%', pt: '4%', pb: '5%' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' rowGap='30px' width={{ xs: '100%', lg: '65%' }}>
                    <Stack direction='column' alignItems='start' gap={{ xs: '10px', md: '20px' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: '18px', color: '#F7941D' }}>Our Products</Typography>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Cable Billing Software</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Broadband Billing Software</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>News Paper Billing Software</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Student Management Software</ButtonBase>
                    </Stack>
                    <Stack direction='column' alignItems='start' gap={{ xs: '10px', md: '20px' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: '18px', color: '#F7941D' }}>Our Products</Typography>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Daily Management App</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Gym Management App</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Tiffin Management App</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Adhar Khata App</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Water Billing Software</ButtonBase>
                    </Stack>
                    <Stack direction='column' alignItems='start' gap={{ xs: '10px', md: '20px' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: '18px', color: '#F7941D' }}>Company</Typography>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>About</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Contact Us</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Blog & News</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Refunds & Cancellations</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Privacy Policy</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Terms & Conditions</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Delivery & Shipping</ButtonBase>
                        <ButtonBase sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Pricing</ButtonBase>
                    </Stack>
                </Stack>
                <Stack direction='column' alignItems='start' gap={{ xs: '10px', md: '20px' }}>
                    <Typography sx={{ fontWeight: '500', fontSize: '18px', color: '#F7941D' }}>Social</Typography>
                    <Typography sx={{ fontweight: '400', fontSize: '16px', color: 'white' }}>Find us on Social media</Typography>
                    <Box display='flex' gap='10px'>
                        <TwitterIcon sx={{ color: 'white' }} />
                        <FacebookOutlinedIcon sx={{ color: 'white' }} />
                    </Box>
                </Stack>
            </Stack >
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' alignItems='center' sx={{ px: '7%', py: '15px', width: '100%', gap: '8%', rowGap: '1rem' }}>
                <Image src={Cablebuddylogo} alt='cablebuddy' sx={{ maxWidth: { xs: '100%', sm: '40%' } }} />
                <Typography sx={{textAlign: 'center', color: '#0C3547', fontWeight: '400', fontSize: { xs: '14px', lg: '16px' } }}>Copyright © 2021 Bix42 | Powered by BPK Softwares Pvt Ltd</Typography>
            </Stack>
        </>
    )
}

export default Footer
