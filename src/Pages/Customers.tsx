import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Navbar/Header'
import Sidebar from '../components/Navbar/Sidebar'
import CustomersContent from '../components/Customers/CustomersContent'


const Customers = () => {
    return (
        <Box sx={{ borderRadius: '20px' }}>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ flexGrow: 1 }}>
                    <CustomersContent />
                </Box>
            </Box>
        </Box>
    )
}

export default Customers
