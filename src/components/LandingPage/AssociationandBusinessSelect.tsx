import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import IFMR from '../../assets/Images/IFMR.png'
import OasisStartup from '../../assets/Images/Oasis.png'
import StartUp from '../../assets/Images/StartUp.png'
import iStart from '../../assets/Images/iStart.png'
import Image from '../Image'
import Gym from '../../assets/Images/Gym.png'
import Cable from '../../assets/Images/Cable.png'
import Hotel from '../../assets/Images/Hotel.png'
import { Icon } from '@iconify/react';
import handsomeMen from '../../assets/Images/handsomeMen.png'

const AssociationandBusinessSelect = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction='column' alignItems='center' gap='15px' bgcolor='#F4F4F4' px='7%' py={{ xs: '10%', md: '6%' }} width='100%'>
                <Typography sx={{ fontWeight: '400', fontSize: '16px', color: '#F7941D' }}>// ASSOCIATION</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '32px', textAlign: 'center' }}>Partner Organization</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between' alignItems='center' width='100%' mt='10px' gap='3rem'>
                    <Image src={IFMR} alt='Ifmr' sx={{ minWidth: '2rem' }} />
                    <Image src={OasisStartup} alt='Oasis' sx={{ minWidth: '2rem' }} />
                    <Image src={StartUp} alt='Startup' sx={{ minWidth: '2rem' }} />
                    <Image src={iStart} alt='istart' sx={{ minWidth: '2rem' }} />
                </Stack>
            </Stack>
            {/* ...........................Fifth-section.......................... */}

            <Stack direction='column' alignItems='center' gap='15px' px='7%' py={{ xs: '10%', md: '6%' }} width='100%'>
                <Typography sx={{ fontWeight: '400', fontSize: '16px', color: '#F7941D' }}>// SELECT YOUR BUSINESS</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '32px', textTransform: 'capitalize', textAlign: 'center' }}>We Provide Specialised Solution As per Your Business Need</Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' gap='2%' mt='10px' rowGap={3}>
                    <Stack sx={{ flex: 1, gap: '6px' }}>
                        <Image src={Gym} alt='Gym' sx={{ maxWidth: '100%' }} />
                        <Typography sx={{ textAlign: 'center', fontWeight: '600', fontSize: '18px' }}>Gym</Typography>
                    </Stack>
                    <Stack sx={{ flex: 1, gap: '6px' }}>
                        <Image src={Cable} alt='Cable' sx={{ maxWidth: '100%' }} />
                        <Typography sx={{ textAlign: 'center', fontWeight: '600', fontSize: '18px' }}>Cable</Typography>
                    </Stack>
                    <Stack sx={{ flex: 1, gap: '6px' }}>
                        <Image src={Hotel} alt='Hotel' sx={{ maxWidth: '100%' }} />
                        <Typography sx={{ textAlign: 'center', fontWeight: '600', fontSize: '18px' }}>Hotel</Typography>
                    </Stack>
                </Stack>
            </Stack>
            {/* ...........................Sixth-section............................ */}

            <Stack sx={{ padding: '7%', width: '100%' }}>
                <Stack direction='row' justifyContent={{ xs: 'start', md: 'end' }} sx={{ position: 'relative', bgcolor: '#0C3547', borderRadius: { xs: '10px', md: '20px' }, width: '100%', padding: '4%' }}>
                    <Image src={handsomeMen} alt='men' sx={{ position: 'absolute', width: '25rem', left: 10, bottom: 0, display: { xs: 'none', md: 'block' } }} />
                    <Stack gap='1rem' sx={{ width: { md: '50%', lg: 'fit-content' } }}>
                        <Typography sx={{ textAlign: 'left', color: 'white', fontWeight: '500', fontSize: '20px' }}>Grow Your Business !!
                        </Typography>
                        <Typography sx={{ fontWeight: '600', fontSize: { xs: '40px', md: '50px' }, color: 'white', lineHeight: '60px' }}>
                            Let's Download <Typography component='span' sx={{ color: '#F7941D', fontWeight: '600', fontSize: { xs: '40px', md: '50px' } }}>Cable Buddy</Typography>
                        </Typography>
                        <Button startIcon={<Icon icon="logos:google-play-icon" width='38px' />} sx={{ bgcolor: '#F7941D', width: 'fit-content', px: '20px', py: '10px', borderRadius: '12px', '&:hover': { bgcolor: 'rgba(247, 148, 29, 0.9)' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', color: 'white' }}>
                                <Typography sx={{ fontWeight: '600', fontSize: { xs: '8px', md: '10px' } }}>GET IT ON</Typography>
                                <Typography sx={{ fontWeight: '600', fontSize: { xs: '20px', lg: '30px' }, textTransform: 'capitalize', lineHeight: '35px', }}>Google Play</Typography>
                            </Box>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box >
    )
}

export default AssociationandBusinessSelect
