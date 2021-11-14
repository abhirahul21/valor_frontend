import React, { useEffect, useState } from "react";
import Appbar from "../../Component/appBar";
import { Typography, Container, Breadcrumbs, Link } from "@mui/material";
import axios from "../../axios-order";

export default function Profile() {
  useEffect(() => {
    axios
      .get("/users/profile")
      .then((response) => {
        //   firstName,lastName,email,phone
      })
      .catch((err) => {});
  }, []);

  const handleChangePasswordSubmit = () => {
    axios
      .post("/users/resetPass")
      .then((response) => {
        //   firstName,lastName,email,phone
      })
      .catch((err) => {});
  };

  return (
    <>
      <Appbar />
      <Container>
        <Breadcrumbs aria-label="breadcrumb" style={{ marginTop: "10px" }}>
          <Link underline="hover" color="inherit" href="/home">
            Home
          </Link>
          <Typography color="text.primary">Profile</Typography>
        </Breadcrumbs>
        {/* .......Change Password....... */}

        {/* .......Profile details....... */}
      </Container>
    </>
  );
}
