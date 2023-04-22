import React from 'react'
import NavbarLandingPage from '../components/LandingPage/NavbarLandingPage'
import { Box, Paper } from '@mui/material'
import MainSection from '../components/LandingPage/MainSection'
import BixappFeatureSection from '../components/LandingPage/BixappFeatureSection'
import AssociationandBusinessSelect from '../components/LandingPage/AssociationandBusinessSelect'
import Footer from '../components/LandingPage/Footer'
import OurClientsSection from '../components/LandingPage/OurClientsSection'

const LandingPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <NavbarLandingPage />
            <MainSection />
            <BixappFeatureSection />
            <OurClientsSection />
            <AssociationandBusinessSelect />
            <Footer />
        </Box>
    )
}

export default LandingPage
