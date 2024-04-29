import {
  Coffee,
  Inventory,
  ShoppingCart,
  WatchLater,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";


const IconwithText = (bgColor, text, icon) => {
  return (
    <Grid item xs={10} md={6}>
      <Stack direction="row" gap={2} alignItems="center">
        <Box
          sx={{
            width: "35px",
            height: "35px",
            borderRadius: "100%",
            backgroundColor: `${bgColor}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </Box>
        <Typography variant="body1" component="p">
          {text}
        </Typography>
      </Stack>
    </Grid>
  );
};
export default function Banner() {
  return (
      <Box
        sx={{
          backgroundImage: "url(assets/images/banner/herobackground.png)",
          backgroundSize: "cover",
          paddingY:{xs:"30px",md:"50px"},
          marginBottom: { xs: "50px" },
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sx: "60%" } }}>
            <img
              style={{ width: "100%" }}
              src="assets/images/banner/heroimage.png"
              alt="banner"
            />
          </Box>
          <Box sx={{ width: { xs: "100%", sx: "40%" } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ marginBottom: "30px"}}
              textTransform={"uppercase"}
            >
              Find the perfect coffee for any time of day
            </Typography>
            <Typography
              variant="h6"
              component="h4"
              sx={{ marginBottom: "60px" }}
            >
              With Coffee Delivery, you receive your coffee wherever you are, at any time.
            </Typography>
            <Grid container spacing={2}>
              {IconwithText(
                "#C47F17",
                "Simple and secure purchase",
                <ShoppingCart fontSize="small" sx={{ color: "white" }} />
              )}
              {IconwithText(
                "#574F4D",
                "The packaging keeps the coffee intact.",
                <Inventory fontSize="small" sx={{ color: "white" }} />
              )}
              {IconwithText(
                "#DBAC2C",
                "Fast and tracked delivery",
                <WatchLater fontSize="small" sx={{ color: "white" }} />
              )}
              {IconwithText(
                "#8047F8",
                "The coffee arrives fresh to you.",
                <Coffee fontSize="small" sx={{ color: "white" }} />
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
  );
}
