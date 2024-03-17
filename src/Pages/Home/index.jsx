import { Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import CoffeeCard from "./CoffeeCard";
import Toast from "../../Components/Toast";
import LoaderSkeleton from "./LoaderSkeleton";

export default function Home() {
  const [coffee, setCoffee] = useState();
  const [toast, setToast] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3001/coffee")
      .then((res) => res.json())
      .then((json) => setCoffee(json))
      .catch((err) => console.log(err));
  }, []);
  const handleToast = (quantity, coffee) => {
    setToast(`${quantity} ${coffee} added to the cart`);
  };

  return (
    <>
      <Banner />
      <Container sx={{ marginBottom: "80px" }}>
        <Typography variant="h4" component="h2" textTransform={"capitalize"}>
          Our coffees
        </Typography>
        {coffee ? (
          <Grid
            container
            columnSpacing={4}
            rowSpacing={10}
            marginTop={2}
            justifyContent="center"
          >
            {coffee?.map((item, index) => (
              <CoffeeCard key={index} item={item} handleToast={handleToast} />
            ))}
          </Grid>
        ) : (
          <Grid
            container
            columnSpacing={4}
            rowSpacing={10}
            marginTop={2}
            justifyContent="center"
          >
            {Array(16)
              .fill(true)
              .map((e, i) => (
                <LoaderSkeleton key={i} />
              ))}
          </Grid>
        )}
      </Container>
      <Toast toastMessage={toast} />
    </>
  );
}
