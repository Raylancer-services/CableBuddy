import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Image from '../Image'
import CustomersManagementImg from '../../assets/Images/CustomersImg.png'
import AutomaticBilling from '../../assets/Images/AutomaticBillingImg.png'
import CollectionAgent from '../../assets/Images/AgentImg.png'
import GSTBilling from '../../assets/Images/GstImg.png'
import OnlinePayment from '../../assets/Images/PaymentImg.png'
import Report from '../../assets/Images/Report.png'
import bgImg from '../../assets/Images/FeaturesLayer.png'

const BixappFeatureSection = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', px: '7%', py: { xs: '10%', md: '6%' }, gap: '35px', backgroundImage: `url(${bgImg})`, width: '100%' }}>
            <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Typography sx={{ color: '#F7941D', fontWeight: '400', fontSize: '16px' }}>BIXAPP FEATURES</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '32px', textAlign: 'center' }}>Why Use Cable Buddy App ?</Typography>
            </Box>
            <Stack gap={2}>
                <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey'>
                        <Image src={CustomersManagementImg} alt='customersmanage' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>Customers Management</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack>
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey'>
                        <Image src={AutomaticBilling} alt='automaticbilling' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>Automatic Billing</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack>
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey'>
                        <Image src={CollectionAgent} alt='collectionAgent' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>Collection Agent</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack>
                </Stack >
                <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey'>
                        <Image src={GSTBilling} alt='GSTBilling' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>GST and Non GST Billing</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack>
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey' >
                        <Image src={OnlinePayment} alt='OnlinePayment' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>Online Payment</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack >
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey' >
                        <Image src={Report} alt='Report' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>Report</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack >
                </Stack >
            </Stack >
        </Box >
    )
}

export default BixappFeatureSection
