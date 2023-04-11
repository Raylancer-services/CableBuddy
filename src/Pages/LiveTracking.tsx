import React from 'react'
import Header from '../components/Navbar/Header'
import Sidebar from '../components/Navbar/Sidebar'
import Box from '@mui/material/Box/Box'
import LiveTrackingContent from '../components/LiveTracking/LiveTrackingContent'

const LiveTracking = () => {
    return (
        <Box sx={{ borderRadius: '20px' }}>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ flexGrow: 1 }}>
                    <LiveTrackingContent />
                </Box>
            </Box>
        </Box>
    )
}

export default LiveTracking
