import React from "react";
import Appbar from "../../Component/appBar";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Appbar />
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <img
          src="https://static.wixstatic.com/media/560507_aa1328f29ae94f5a8176c145df154c73~mv2.png/v1/fill/w_756,h_404,al_c,q_85,usm_0.66_1.00_0.01/THE%20VALOR.webp"
          height={150}
          width={250}
        />
        <Typography style={{ marginTop: "20px" }} variant="h4">
          Welcome to The Valor Solution
        </Typography>
      </div>
    </>
  );
}
