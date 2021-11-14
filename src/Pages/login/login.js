import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginBg2 from "../../asserts/image/loginBg4.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "../../axios-order";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      style={{ fontSize: "17px" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.thevalorsolution.com/">
        The valor solution
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();
  const [singInField, setSingInField] = useState(true);
  const [singUpField, setSingUpField] = useState(false);

  const handleSinginSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const singInData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    axios
      .post("/users/login", singInData)
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSingUpPage = () => {
    setSingInField(false);
    setSingUpField(true);
  };

  const handleSingInPage = () => {
    setSingInField(true);
    setSingUpField(false);
  };

  const handleSingUpSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const singupData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      phone: data.get("phone"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(singupData);
    axios
      .post("/users/", singupData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    // setSingInField(true);
    // setSingUpField(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        {/*1st column */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${LoginBg2})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ textAlign: "center", marginTop: "230px" }}>
            <img
              src="https://static.wixstatic.com/media/560507_aa1328f29ae94f5a8176c145df154c73~mv2.png/v1/fill/w_756,h_404,al_c,q_85,usm_0.66_1.00_0.01/THE%20VALOR.webp"
              height={150}
              width={250}
            />
            <Typography sx={{ m: 5 }} style={{ fontWeight: "400" }}>
              The Valor Solution is a practice management company that utilizes
              technology to bring the patient and provider closer together. With
              ever increasing expectations from payers, the administrative
              burden on doctors continues to rise. The healthcare industry needs
              technology solutions that automate the workload and reduce the
              burden for clinicians.
            </Typography>
            <Copyright sx={{ mt: 20 }} />
          </div>
        </Grid>
        {/* 2nd column */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            {singInField && (
              <>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSinginSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        style={{ textAlign: "center", cursor: "pointer" }}
                        onClick={handleSingUpPage}
                      >
                        {"Don't have an account? Sign Up"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </>
            )}
            {singUpField && (
              <>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSingUpSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="mobileNo"
                        label="Mobile Number"
                        name="phone"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        style={{ textAlign: "center", cursor: "pointer" }}
                        onClick={handleSingInPage}
                      >
                        Already have an account? Sign in
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
