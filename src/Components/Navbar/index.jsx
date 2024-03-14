import { LocationOn, ShoppingCart } from "@mui/icons-material";
import { Badge, Box, Button, Container} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const {list} = useSelector(state=>state.cart)
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={10}
      sx={{
        backgroundColor: "#FAFAFA",
      }}
      component="nav"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "80px",
          alignItems: "center",
        }}
      >
        <Box>
          <Link to="/">
            <img
            style={{width:"70px"}}
              src="assets/images/logo-cropped.png"
              alt="Coffee Delivery"
            />
          </Link>
        </Box>
        <Box display="flex" gap={2}>
          <Button sx={{transition:"all 0.3s",minWidth:"0",color:"secondary.main",backgroundColor:'secondary.light',"&:hover":{backgroundColor:'secondary.light',opacity:"0.85"}}}>
            <LocationOn sx={{ verticalAlign: "middle" }}></LocationOn>Fortaleza,
            CE
          </Button>
          <Link to="/checkout">
            <Badge
              badgeContent={list.length}
              sx={{
                color: "primary.main",
                "& .MuiBadge-badge": { backgroundColor: "primary.dark" },
              }}
            >
              <Button sx={{transition:"all 0.3s",minWidth:"0",color:'primary.dark',backgroundColor:'primary.main',"&:hover":{backgroundColor:'primary.main',opacity:"0.85"}}}>
                <ShoppingCart sx={{ verticalAlign: "middle" }}></ShoppingCart>
              </Button>
            </Badge>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
