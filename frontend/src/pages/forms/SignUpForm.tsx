import { Form, Formik } from 'formik'
import {
  Grid,
  Container,
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material'

export default function SignUpForm() {
  return (
    <Container>
      <Box
        sx={{
          p: '20px',
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          sx={{
            mb: '20px',
            fontWeight: '500',
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
          <Form>
            <Grid container justifyContent={'center'} spacing={4}>
              <Grid item xs={6}>
                <TextField sx={{
                  backgroundColor: '#323544',
                  borderRadius: '15px',
                  "& .MuiOutlinedInput-root": {
                    color: '#fff',
                    "& fieldset": {
                      borderColor: '#323544',
                      borderRadius: '15px',
                    },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: '#323544',
                  },
                  },
                }} InputLabelProps={{
                  style: {
                    color: '#fff',
                  }
                }} fullWidth name={'fname'} label={'Enter First Name'} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                sx={{
                  backgroundColor: '#323544',
                  borderRadius: '15px',
                  "& .MuiOutlinedInput-root": {
                    color: '#fff',
                    "& fieldset": {
                      borderColor: '#323544',
                      borderRadius: '15px',
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: '#323544',
                    },
                  },               
                }}
                InputLabelProps={{
                  style: {
                    color: '#fff',
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
                  "& .MuiOutlinedInput-root": {
                    color: '#fff',
                    "& fieldset": {
                      borderColor: '#323544',
                      borderRadius: '15px',
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: '#323544',
                    },
                  },               
                }}
                InputLabelProps={{
                  style: {
                    color: '#fff',
                  }
                }}
                  fullWidth
                  name={'email'}
                  type={'email'}
                  label={'Enter Email Id'}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                sx={{
                  backgroundColor: '#323544',
                  borderRadius: '15px',
                  "& .MuiOutlinedInput-root": {
                    color: '#fff',
                    "& fieldset": {
                      borderColor: '#323544',
                      borderRadius: '15px',
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: '#323544',
                    },
                  },               
                }}
                InputLabelProps={{
                  style: {
                    color: '#fff',
                  }
                }}
                  fullWidth
                  name={'username'}
                  label={'Enter Username'}
                />
                </Grid>
                <Grid item xs={6}>
                <TextField
                sx={{
                  backgroundColor: '#323544',
                  borderRadius: '15px',
                  "& .MuiOutlinedInput-root": {
                    color: '#fff',
                    "& fieldset": {
                      borderColor: '#323544',
                      borderRadius: '15px',
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: '#323544',
                    },
                  },               
                }}
                InputLabelProps={{
                  style: {
                    color: '#fff',
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
                  "& .MuiOutlinedInput-root": {
                    color: '#fff',
                    "& fieldset": {
                      borderColor: '#323544',
                      borderRadius: '15px',
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: '#323544',
                    },
                  },               
                }}
                InputLabelProps={{
                  style: {
                    color: '#fff',
                  }
                }}
                  fullWidth
                  name={'cpassword'}
                  label={'Confirm Password'}
                />
                </Grid>
              <Grid item xs={4}>
                <Button
                color='primary'
                variant='contained'
                  sx={{
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
