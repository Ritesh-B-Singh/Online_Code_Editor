import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import LoginForm from './forms/LoginForm'
import landingimage from '../assets/images/landingimage.png'

const Home = () => {
  return (
    <Box>
      <Header />
      <Box>
        <Grid
          sx={{
            minHeight: '90vh'
          }}
          container
          alignItems={'center'}
          spacing={2}
        >
          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            item
            xs={8}
          >
            <img src={landingimage} width="854px" alt="landingimage" />
          </Grid>
          <Grid item xs={4}>
            <LoginForm />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Home
