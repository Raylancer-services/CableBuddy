import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Navbar/Header'
import Sidebar from '../components/Navbar/Sidebar'
import ReportsContent from '../components/Reports/ReportsContent'

const Reports = () => {
    return (
        <Box sx={{ borderRadius: '20px' }}>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ flexGrow: 1 }}>
                    <ReportsContent />
                </Box>
            </Box>
        </Box>
    )
}

export default Reports
