import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import LoginForm from './forms/LoginForm'
import landingimage from '../assets/images/landingimage.png'
import SignUpForm from './forms/SignUpForm'
import Navbar from '../components/Navbar'

const HomeLanding = () => {
  const [state, setState] = useState<Boolean>(true)

  return (
    <Box
      sx={{
        background:
          'linear-gradient(90deg, rgba(15,15,16,1) 54%, rgba(80,84,96,1) 100%)',
        margin: 0
      }}
    >
      <Navbar />
      <Box>
        <Grid
          sx={{
            minHeight: '90vh'
          }}
          container
          alignItems={'center'}
          spacing={2}
        >
          <Grid item xs={5}>
            {state ? (
              <LoginForm onSuccess={() => setState(false)} />
            ) : (
              <SignUpForm onSuccess={() => setState(true)} />
            )}
          </Grid>
          <Grid item xs={7}>
            <img
              src={landingimage}
              alt="landingimage"
              width={'100%'}
              height={'100%'}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default HomeLanding
