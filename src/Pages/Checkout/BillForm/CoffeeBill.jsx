import {
  Box,
  Button,
  Stack,
  Typography,
  IconButton,
  Divider,
  useMediaQuery
} from "@mui/material";
import React from "react";
import { toast,Slide } from "react-toastify";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import {
  decreaseQunatity,
  increaseQuantity,
  removeItem,
} from "../../../Store/Slices/cartSlice";

export default function CoffeeBill({ item }) {
  const mobileSize = useMediaQuery('(max-width:600px)')
  const { img, title, price, quantity, id } = item;
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
    toast(`1 ${title} added to the cart`, {
      position: mobileSize ? "bottom-center" : "bottom-left",
      autoClose: 3000,
      hideProgressBar: true,
      newestOnTop: true,
      closeOnClick: false,
      closeButton: false,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: false,
      pauseOnHover: false,
      theme: "light",
      transition: Slide,
    })
  };
  const handleDeccrease = () => {
    dispatch(decreaseQunatity(id));
    toast(`1 ${title} removed form the cart`, {
      position: mobileSize ? "bottom-center" : "bottom-left",
      autoClose: 3000,
      hideProgressBar: true,
      newestOnTop: true,
      closeOnClick: false,
      closeButton: false,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: false,
      pauseOnHover: false,
      theme: "light",
      transition: Slide,
    })
  };
  const handleRemoveItem = () => {
    dispatch(removeItem(id));
    toast(`All ${title} removed from the cart`, {
      position: mobileSize ? "bottom-center" : "bottom-left",
      autoClose: 3000,
      hideProgressBar: true,
      newestOnTop: true,
      closeOnClick: false,
      closeButton: false,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: false,
      pauseOnHover: false,
      theme: "light",
      transition: Slide,
    })
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          justifyContent: "space-between",
          paddingY: "5px",
          paddingX: "0px",
        }}
      >
        <Box
          component={"img"}
          src={`assets/images/Products/${img}`}
          alt={title}
          sx={{ width: "20%" }}
        />
        <Box width={"60%"}>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography gutterBottom>{title}</Typography>
            <Stack direction={"row"} gap={1}>
              <Box
                display="flex"
                alignItems="center"
                backgroundColor="background.darkgray"
                borderRadius={1}
              >
                <IconButton onClick={handleDeccrease}>
                  <Remove
                    fontSize="small"
                    sx={{ color: "secondary.dark", cursor: "pointer" }}
                  />
                </IconButton>
                <Typography variant="subtitle1">{quantity}</Typography>
                <IconButton onClick={handleIncrease}>
                  <Add
                    fontSize="small"
                    sx={{ color: "secondary.dark", cursor: "pointer" }}
                  />
                </IconButton>
              </Box>
              <Button
                disableRipple
                variant="filled"
                startIcon={
                  <Delete size="small" sx={{ color: "secondary.dark" }} />
                }
                size="small"
                aria-label="remove"
                sx={{
                  backgroundColor: "background.darkgray",
                  fontSize: "14px",
                  fontWeight: "400",
                  textTransform: "capitalize",
                  "&:hover": { backgroundColor: "background.darkgray" },
                  "& .MuiButton-startIcon": { marginX: "0" },
                }}
                onClick={handleRemoveItem}
              >
                Remove
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box width={"20%"}>${(price * quantity).toFixed(2)}</Box>
      </Box>
      <Divider sx={{ marginBottom: "10px" }} />
    </>
  );
}
