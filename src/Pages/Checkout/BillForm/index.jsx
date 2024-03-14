import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CoffeeBill from "./CoffeeBill";
export default function BillForm({handleValidation,handleToast}) {
  const { list } = useSelector((state) => state.cart);
  let totalPrice = 0;
  list?.map((e) => (totalPrice += +(e.price * e.quantity).toFixed(2)));

  return (
    <>
      <Typography variant="h6" component="p" marginBottom={2}>
        Selected Coffees
      </Typography>
      <Paper
        sx={{
          backgroundColor: "background.lightgray",
          borderRadius: "10px 40px 10px 40px",
          padding: "20px 10px",
        }}
        elevation={0}
      >
        {list?.map((e, i) => (
          <CoffeeBill key={i} item={e} handleToast={handleToast}/>
        ))}
        <Box display="flex" justifyContent="space-between" marginBottom={1}>
          <Typography>Total Items</Typography>
          <Typography>${totalPrice.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" marginBottom={1}>
          <Typography>Delivery</Typography>
          <Typography>$2</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" marginBottom={3}>
          <Typography variant="h6" component="p">
            Total
          </Typography>
          <Typography variant="h6" component="p">
            ${totalPrice ? (totalPrice + 2).toFixed(2) : 0}
          </Typography>
        </Box>
        <Button
          disableRipple
          onClick={handleValidation}
          sx={{
            width: "100%",
            cursor: `${totalPrice ? "pointer !important" : "not-allowed !important"}`,
            backgroundColor: "primary.dark",
            color: "white !important",
            "&:hover": {
              backgroundColor: "#DBAC2C",
              color: "white !important",
            },
          }}
          type="submit"
          disabled={!totalPrice}
        >
          Confirm
        </Button>
      </Paper>
    </>
  );
}
