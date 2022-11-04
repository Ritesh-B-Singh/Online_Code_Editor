import React from "react";
import { Form, Formik } from "formik";
import { Grid, Container, Box, Typography } from "@mui/material";
import TextfieldWrapper from "../../InputComponents/TextField";
import ButtonWrapper from "../../InputComponents/Buttons";
import * as Yup from "yup";

export default function LoginForm() {
  const validation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <Container>
      <Box
        sx={{
          p: "20px",
          border: "2px solid #e0e0e0",
          boxShadow: " 5px 5px 2px 1px rgba(0, 0, 255, .2)",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: "20px",
            fontWeight: "600",
          }}
        >
          Login
        </Typography>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={validation}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Grid justifyContent={"center"} container spacing={2}>
              <Grid item xs={12}>
                <TextfieldWrapper name={"name"} label={"Enter Full Name"} />
              </Grid>
              <Grid item xs={12}>
                <TextfieldWrapper name={"email"} label={"Enter Email"} />
              </Grid>
              <Grid item xs={12}>
                <TextfieldWrapper
                  type="password"
                  name={"password"}
                  label={"Enter Password"}
                />
              </Grid>
              <Grid item xs={4}>
                <ButtonWrapper
                  sx={{
                    backgroundColor: "#000000",
                  }}
                >
                  Submit
                </ButtonWrapper>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}
