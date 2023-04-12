import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Image from '../Image';
import { Icon } from '@iconify/react';
import { Box, Stack, Typography } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { ActionsCard, ColorCard } from '../../MockData/DashboardCards';
import { RenewalsCard } from '../../MockData/DashboardCards';
import { CustomersCard } from '../../MockData/DashboardCards';
import { v4 as uuidv4 } from 'uuid';


const DasbhboardContent = () => {
    return (
        <Stack direction='column' spacing={1}>
            <Grid container spacing={2}>
                {
                    ColorCard.map((item, index) => (
                        <Grid lg={3} key={uuidv4()}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '160px', background: `${item.background}`, px: '5%', py: '18px', position: 'relative', borderRadius: '12px' }}>
                                <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>{item.title}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <CurrencyRupeeIcon sx={{ display: 'inline-block', minWidth: 0 }} />
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>{item.amount}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <PersonOutlineOutlinedIcon sx={{ color: '#F7941D' }} />
                                    <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>{item.persons}</Typography>
                                </Box>
                                <CurrencyRupeeIcon sx={{ color: '#F7941D', fontSize: '50px', position: 'absolute', right: 10, top: 70, }} />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid container spacing={2}>
                {
                    RenewalsCard.map((item, index) => (
                        <Grid lg={3} key={uuidv4()}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '115px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                                <Typography sx={{ fontWeight: '400', fontSize: '14px' }}>{item.title}</Typography>
                                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>{item.amount}</Typography>
                                <Image src={item.image} alt='router' sx={{ position: 'absolute', right: 18, bottom: 20 }} />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid container spacing={2}>
                {
                    CustomersCard.map((item, index) => (
                        <Grid lg={3} key={uuidv4()}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '115px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                                <Typography sx={{ fontWeight: '400', fontSize: '14px' }}>{item.title}</Typography>
                                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>{item.amount}</Typography>
                                <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
                                    <Icon icon={item.image} width='34' color='#F7941D' />
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
            <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingLeft: '1rem' }}>Actions</Typography>
            <Grid container spacing={2}>
                {
                    ActionsCard.map((item, index) => (
                        <Grid lg={3} key={uuidv4()}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '115px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                                <Typography sx={{ fontWeight: '400', fontSize: '14px' }}>{item.title}</Typography>
                                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>{item.amount}</Typography>
                                <Image src={item.image} sx={{ position: 'absolute', right: 18, bottom: 20 }} />
                                <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
                                    <Icon icon={item.icon!} width='34' color='#F7941D' />
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Stack>
    )
}

export default DasbhboardContent
