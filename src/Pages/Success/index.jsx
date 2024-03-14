import { AttachMoney, LocationOn, WatchLater } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Success() {
  const {info} = useSelector(state=>state.form)
  console.log(info)
  return (
    <Container>
      <Stack pt={2}>
        <Typography
          variant="h6"
          component="p"
          marginBottom={2}
          textTransform={"capitalize"}
          gutterBottom
        >
          Order Confirmed
        </Typography>
        <Typography>
          Now, just wait, and soon the coffee will be on its way to you.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          columnGap={{ sm: 2, md: 4, lg: 8 }}
          rowGap={2}
          mt={6}
        >
          <Stack
            width={{ xs: "100%", sm: "50%" }}
            sx={{
              padding:"30px 50px",
              gap:"30px",
              background:
                "linear-gradient(#fff 0 0) padding-box,linear-gradient(to right, #DBAC2C, #8047F8) border-box",
              border: "1px solid transparent",
              borderRadius: "10px 40px 10px 40px",
            }}
            justifyContent={"center"}
          >
            <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
              <Stack
                width={"40px"}
                height={"40px"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={"secondary.dark"}
                borderRadius={"100%"}
              >
                <LocationOn sx={{ color: "white" }} />
              </Stack>
              <Typography>Delivery to <span style={{fontWeight:"600"}}>{info?.street} Street, {info?.number}</span>, {info?.neighborhood} - {info?.city}, {info?.state}.</Typography>
            </Stack>
            <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
              <Stack
                width={"40px"}
                height={"40px"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={"#DBAC2C"}
                borderRadius={"100%"}
              >
                <WatchLater sx={{ color: "white" }} />
              </Stack>
              <Typography>Estimated delivery time: <span style={{fontWeight:"600"}}>20 min - 30 min</span></Typography>
            </Stack>
            <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
              <Stack
                width={"40px"}
                height={"40px"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={"primary.dark"}
                borderRadius={"100%"}
              >
                <AttachMoney sx={{ color: "white" }} />
              </Stack>
              <Typography>Payment upon delivery: <span style={{fontWeight:"600"}}>{info?.paymentMethod}</span></Typography>
            </Stack>
          </Stack>
          <Box
            width={{ xs: "100%", sm: "50%" }}
            component={"img"}
            src="./assets/images/Success/delivery.svg"
          />
        </Stack>
      </Stack>
    </Container>
  );
}
