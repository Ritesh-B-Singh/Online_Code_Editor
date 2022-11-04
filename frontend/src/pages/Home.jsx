import React from "react";
import Header from "../components/Header";
import { Grid, Typography, Button } from "@mui/material";
import landingimage from "../assets/images/landingimage.png";
import LoginForm from "./forms/LoginForm";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <Grid
          sx={{
            minHeight: "90vh",
          }}
          container
          alignItems={"center"}
          spacing={2}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
      </div>
    </div>
  );
}
