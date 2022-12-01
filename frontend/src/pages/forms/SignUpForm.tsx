import { Form, Formik } from 'formik'
import {
  Grid,
  Container,
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

type PayloadType = {
  firstName: string
  lastName: string
  email: string
  password: string
  cPassword: string
}

type Proptype = {
  onSuccess: () => void
}

export default function SignUpForm({ onSuccess }: Proptype) {
  const [payload, setPayload] = useState<PayloadType>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cPassword: ''
  })

  const handleSignup = async () => {
    if (payload.password !== payload.cPassword) {
      toast.error('Please make sure your passwords match.')
    }

    try {
      const reqBody = {
        name: payload.firstName + ' ' + payload.lastName,
        email: payload.email,
        password: payload.password
      }
      const res = await axios.post('http://localhost:5000/signup', reqBody)
      if (res.data === 'Successfully Registered!') toast.success(res.data)
      else toast.error(res.data)
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
          Sign Up
        </Typography>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: ''
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          <Grid container justifyContent={'center'} spacing={4}>
            <Grid item xs={6}>
              <TextField
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
                onChange={(e) =>
                  setPayload({ ...payload, firstName: e.target.value })
                }
                fullWidth
                name={'fname'}
                label={'Enter First Name'}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
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
                onChange={(e) =>
                  setPayload({ ...payload, lastName: e.target.value })
                }
                InputLabelProps={{
                  style: {
                    color: '#fff'
                  }
                }}
                fullWidth
                name={'lname'}
                label={'Enter Last Name'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
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
                onChange={(e) =>
                  setPayload({ ...payload, email: e.target.value })
                }
                InputLabelProps={{
                  style: {
                    color: '#fff'
                  }
                }}
                fullWidth
                name={'email'}
                type={'email'}
                label={'Enter Email Id'}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
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
                onChange={(e) =>
                  setPayload({ ...payload, password: e.target.value })
                }
                InputLabelProps={{
                  style: {
                    color: '#fff'
                  }
                }}
                fullWidth
                name={'password'}
                type={'password'}
                label={'Enter Password'}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
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
                onChange={(e) =>
                  setPayload({ ...payload, cPassword: e.target.value })
                }
                fullWidth
                name={'cpassword'}
                type={'password'}
                label={'Confirm Password'}
              />
            </Grid>
            <Grid item xs={4}>
              <Box display={'flex'} justifyContent="center">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleSignup}
                  sx={{
                    borderRadius: '10px',
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
        <Box
          pt={2}
          display="flex"
          gap={1}
          justifyContent="center"
          alignItems={'center'}
        >
          <Typography color="#fff">Already have an account?</Typography>
          <Button
            onClick={() => onSuccess()}
            color="primary"
            sx={{ textDecoration: 'underline', background: '#000', textTransform: 'none' }}
          >
            Log in
          </Button>
        </Box>
      </Box>
      <Toaster />
    </Container>
  )
}
