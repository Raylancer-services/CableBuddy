import ComplaintsContent from '../components/Complaints/ComplaintsContent'
import Header from '../components/Navbar/Header'
import Sidebar from '../components/Navbar/Sidebar'
import Box from '@mui/material/Box/Box'

const Complaints = () => {
  return (
    <Box sx={{ borderRadius: '20px' }}>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <ComplaintsContent />
        </Box>
      </Box>
    </Box>
  )
}

export default Complaints
