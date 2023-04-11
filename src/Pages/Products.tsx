import React from 'react'
import { Box } from '@mui/material'
import Header from '../components/Navbar/Header'
import Sidebar from '../components/Navbar/Sidebar'
import ProductsContent from '../components/Products/ProductsContent'

const Products = () => {
    return (
        <Box sx={{ borderRadius: '20px' }}>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ flexGrow: 1 }}>
                    <ProductsContent />
                </Box>
            </Box>
        </Box>
    )
}

export default Products
