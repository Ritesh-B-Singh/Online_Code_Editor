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
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { Link as RouterLink } from 'react-router-dom'

type Proptype = {
  onSuccess: () => void
}

export default function LoginForm({ onSuccess }: Proptype) {
  const navigate = useNavigate()
  const validation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid').required('Email is required'),
    password: Yup.string().required('Password is required')
  })

  const [payload, setPayload] = useState<{ email: string; password: string }>({
    email: '',
    password: ''
  })

  const handleLogin = async () => {
    try {
      const reqBody = {
        email: payload.email,
        password: payload.password
      }
      const res = await axios.post('http://localhost:5000/login', reqBody)
      if (res.data.message === 'Login Successfull!') {
        toast.success(res.data.message)
        navigate('/home')
      } else toast.error(res.data.message)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Box
        sx={{
          p: '20px'
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          sx={{
            mb: '20px',
            fontWeight: '500'
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
          <Grid container justifyContent={'center'} spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) =>
                  setPayload({ ...payload, email: e.target.value })
                }
                required
                sx={{
                  backgroundColor: '#323544',
                  borderRadius: '15px',
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    '& fieldset': {
                      borderColor: '#323544',
                      borderRadius: '15px'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#323544'
                    }
                  }
                }}
                InputLabelProps={{
                  style: {
                    color: '#fff'
                  }
                }}
                fullWidth
                name={'email'}
                label={'Enter Email'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) =>
                  setPayload({ ...payload, password: e.target.value })
                }
                sx={{
                  backgroundColor: '#323544',
                  borderRadius: '15px',
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    '& fieldset': {
                      borderColor: '#323544',
                      borderRadius: '15px'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#323544'
                    }
                  }
                }}
                required
                InputLabelProps={{
                  style: {
                    color: '#fff'
                  }
                }}
                fullWidth
                type="password"
                name={'password'}
                label={'Enter Password'}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display={'flex'} justifyContent="center">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={(e) => {
                    e.preventDefault()
                    handleLogin()
                  }}
                  sx={{
                    borderRadius: '10px',
                    textTransform: 'none',
                    '&: hover': {
                      background: '#4dabf5',
                      color: '#000',
                      border: '1px solid black',
                      borderRadius: '10px'
                    }
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Formik>
        <Box pt={2} display="flex" gap={1} justifyContent="center" alignItems={'center'}>
          <Typography color="#fff">Don't have an account yet?</Typography>
          <Button
            onClick={() => onSuccess()}
            color="primary"
            sx={{ textDecoration: 'underline', background: '#000', textTransform: 'none' }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
      <Toaster />
    </Container>
  )
}
