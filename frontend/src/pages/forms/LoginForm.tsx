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
                }} fullWidth name={'email'} label={'Enter Email'} />
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
                  type="password"
                  name={'password'}
                  label={'Enter Password'}
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
