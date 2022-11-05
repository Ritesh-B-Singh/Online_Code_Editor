import React from 'react'
import { Form, Formik } from 'formik'
import {
  Grid,
  Container,
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material'
import * as Yup from 'yup'

export default function LoginForm() {
  const validation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid').required('Email is required'),
    password: Yup.string().required('Password is required')
  })
  return (
    <Container>
      <Box
        sx={{
          p: '20px',
          border: '2px solid #e0e0e0',
          boxShadow: ' 5px 5px 2px 1px rgba(0, 0, 255, .2)',
          borderRadius: '10px'
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: '20px',
            fontWeight: '600'
          }}
        >
          Login
        </Typography>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: ''
          }}
          validationSchema={validation}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Form>
            <Grid container justifyContent={'center'} spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth name={'email'} label={'Enter Email'} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  name={'password'}
                  label={'Enter Password'}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  sx={{
                    backgroundColor: '#000000',
                    color: '#FFF',
                    '&: hover': {
                        background: '#FFF',
                        color: '#000',
                        border: '1px solid black',
                        borderRadius: '10px'
                  }
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </Container>
  )
}
