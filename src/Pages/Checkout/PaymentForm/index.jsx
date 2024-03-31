import React from "react";
import {
  Stack,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  ListItemText,
} from "@mui/material";
import {
  AccountBalance,
  AttachMoney,
  CreditCard,
  Money,
} from "@mui/icons-material";
const toggleButtonStyle = (errors) => {
  return {
    width: { xs: "100%", md: "33.3%" },
    outline: "none",
    justifyContent: { xs: "start", md: "center" },
    backgroundColor: "background.darkgray",
    borderRadius: "5px !important",
    border: `${errors ? "2px solid !important" : "1px solid !important"}`,
    borderColor: `${errors ? "red !important" : "background.darkgray"}`,
    transition: "all 0.4s",
    "&:focus": {
      backgroundColor: "secondary.light",
      border: "1px solid",
      borderColor:"secondary.dark"
    },
    "&:hover": {
      backgroundColor: "background.lightgray",
    },
    "&.Mui-selected": {
      "&:hover": {
        backgroundColor: "secondary.light",
      },
    },
  };
};
export default function PaymentForm({
  paymentMethod,
  handlePaymentMethod,
  errors,
}) {
  const control = {
    id: "paymentMethod",
    name:"paymentMethod",
    value: paymentMethod,
    onChange: (event, p) => handlePaymentMethod("paymentMethod", p),
    exclusive: true,
  };

  return (
    <Stack
      marginTop={2}
      sx={{
        borderRadius: "5px",
        backgroundColor: "background.lightgray",
        padding: "20px 30px",
      }}
    >
      <Stack direction="row" gap={2} alignItems="center" marginBottom={5}>
        <AttachMoney sx={{ color: "secondary.dark" }} />
        <ListItemText
          primary="Payment"
          secondary="Payment"
          sx={{ margin: "0" }}
        />
      </Stack>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
        <ToggleButtonGroup
          {...control}
          sx={{
            gap: "10px",
            width: "100%",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <ToggleButton
            sx={toggleButtonStyle(errors)}
            value="Credit Card"
            key="Credit Card"
          >
            <Stack direction="row" gap={2} alignItems="center">
              <CreditCard sx={{ color: "secondary.dark" }} />
              <Typography variant="body2" component="p">
                Credit Card
              </Typography>
            </Stack>
          </ToggleButton>
          <ToggleButton
            sx={toggleButtonStyle(errors)}
            value="Debit Card"
            key="Debit Card"
          >
            <Stack direction="row" gap={2} alignItems="center">
              <AccountBalance sx={{ color: "secondary.dark" }} />
              <Typography variant="body2" component="p">
                Debit Card
              </Typography>
            </Stack>
          </ToggleButton>
          <ToggleButton sx={toggleButtonStyle(errors)} value="Cash" key="Cash">
            <Stack direction="row" gap={2} alignItems="center">
              <Money sx={{ color: "secondary.dark" }} />
              <Typography variant="body2" component="p">
                Cash
              </Typography>
            </Stack>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Typography sx={{color:"red"}}>{errors}</Typography>
    </Stack>
  );
}
