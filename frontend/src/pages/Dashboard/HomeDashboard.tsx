import { Typography, Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Navbar from '../../components/Navbar'

const HomeDashboard = () => {
  return (
    <Box>
      <Navbar />
      <Box>
        <Typography color="#fff" >Home Page!</Typography>
      </Box>
    </Box>
  )
}

export default HomeDashboard
