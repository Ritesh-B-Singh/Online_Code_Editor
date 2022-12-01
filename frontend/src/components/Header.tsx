import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import icon from '../assets/images/icon.png'

type HeaderProps = {
  form: string,
  setForm:any
}

const Header: React.FunctionComponent<HeaderProps>=({ form ,setForm })=> {
  return (
    <>
      <Stack
            sx={{
              p: '10px 20px'
            }}
            direction="row"
            spacing={4}
            alignItems="center"
          >
            <img
              style={{
                padding: '5px',
                marginLeft: '5px'
              }}
              src={icon}
              alt="icon"
              width={'180px'}
            />
            <Button
              variant={"text"}
              sx={{
                color: form === "login"?"#fff":'#6a7080',
              }}
              onClick={() => setForm("login")}
            >
              Login
            </Button>
            <Button
              variant={"text"}
              sx={{
                color:form === "signup"?"#fff":'#6a7080',
              }}
              onClick={() => setForm("signup")}
            >
              Signup
            </Button>
          </Stack>
    </>
  )
}
export default Header