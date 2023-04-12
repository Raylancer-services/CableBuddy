import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Navbar/Header'
import Sidebar from '../components/Navbar/Sidebar'
import ExpensesContent from '../components/Expenses/ExpensesContent'

const Expenses = () => {
    return (
        <Box sx={{ borderRadius: '20px' }}>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ flexGrow: 1 }}>
                    <ExpensesContent />
                </Box>
            </Box>
        </Box>
    )
}

export default Expenses
