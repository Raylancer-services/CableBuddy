import { Box } from '@mui/material'
import Header from '../components/Navbar/Header'
import Sidebar from '../components/Navbar/Sidebar'
import SMSWalletContent from '../components/SMSWallet/SMSWalletContent'

const SMSWallet = () => {
    return (
        <Box sx={{ borderRadius: '20px' }}>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ flexGrow: 1 }}>
                    <SMSWalletContent />
                </Box>
            </Box>
        </Box >
    )
}

export default SMSWallet
