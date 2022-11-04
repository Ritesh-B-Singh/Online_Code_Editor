import { Grid, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import icon from "../assets/images/icon.png";

export default function Header() {
  return (
    <>
      <Grid
        sx={{
          maxHeight: "100px",
          borderBottom: "1px solid #e0e0e0",
          width: "100%",
        }}
        alignItems="center"
        justifyContent={"space-between"}
        container
      >
        <Grid item xs={4}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img
              style={{
                padding: "10px",
                marginLeft: "10px",
              }}
              src={icon}
              alt="icon"
              width={"40px"}
            />
            <Typography variant="h3" sx={{ fontSize: "24px" }}>
              OnlineCode Editor
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} />
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
          xs={4}
        >
          <Stack
            sx={{
              p: "10px 20px",
            }}
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000000",
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000000",
              }}
            >
              Signup
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
