import { Box } from '@mui/material'
import Header from '../components/Navbar/Header'
import Sidebar from '../components/Navbar/Sidebar'
import CollectionContent from '../components/Collection/CollectionContent'

const Collection = () => {
  return (
    <Box sx={{ borderRadius: '20px' }}>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <CollectionContent />
        </Box>
      </Box>
    </Box >
  )
}

export default Collection
