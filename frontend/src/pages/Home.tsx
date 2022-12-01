import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import LoginForm from './forms/LoginForm'
import landingimage from '../assets/images/landingimage.png'
import SignUpForm from './forms/SignUpForm'

const Home = () => {
  const [form, setForm] = React.useState("login")

  return (
    <Box sx={{
      background: "linear-gradient(90deg, rgba(15,15,16,1) 54%, rgba(80,84,96,1) 100%)",
    margin: 0,}}>
      <Header form={form} setForm = {setForm} />
      <Box >
        <Grid
          sx={{
            minHeight: '90vh'
          }}
          container
          alignItems={'center'}
          spacing={2}
        >
          <Grid item xs={5}>
            {form === "login" ? <LoginForm /> : form === "signup" ? <SignUpForm/> : <LoginForm />}
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

export default Home
