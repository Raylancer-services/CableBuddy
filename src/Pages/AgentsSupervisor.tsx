import { Box } from '@mui/material'
import AgentSupervisorContent from '../components/AgentsSupervisor/AgentSupervisorContent'
import Header from '../components/Navbar/Header'
import Sidebar from '../components/Navbar/Sidebar'


const AgentsSupervisor = () => {
    return (
        <Box sx={{ borderRadius: '20px' }}>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ flexGrow: 1 }}>
                    <AgentSupervisorContent />
                </Box>
            </Box>
        </Box>
    )
}

export default AgentsSupervisor
