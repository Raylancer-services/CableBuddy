import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Navbar/Header'
import Sidebar from '../components/Navbar/Sidebar'
import DasbhboardContent from '../components/Dasbhboard/DasbhboardContent'

const Dashboard = () => {
    return (
        <Box sx={{ borderRadius: '20px' }}>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ flexGrow: 1, padding: '1rem' }}>
                    <DasbhboardContent />
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard
