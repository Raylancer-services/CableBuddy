import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Navbar/Header'
import Sidebar from '../components/Navbar/Sidebar'
import CompaniesContent from '../components/Companies/CompaniesContent'


const Companies = () => {
  return (
    <Box sx={{ borderRadius: '20px' }}>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <CompaniesContent />
        </Box>
      </Box>
    </Box >
  )
}

export default Companies
