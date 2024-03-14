import React from "react";
import { LocationOn } from "@mui/icons-material";
import { Box, ListItemText, Stack, Typography, Input } from "@mui/material";

export default function AddressForm({ values, handleChange, errors }) {
  const { zipCode, street, number, unit, state, city, neighborhood } = values;

  return (
    <Stack
      sx={{
        borderRadius: "5px",
        backgroundColor: "#F3F2F2",
        padding: "20px 30px",
      }}
    >
      <Stack direction="row" gap={2} alignItems="center" marginBottom={5}>
        <LocationOn sx={{ color: "primary.dark" }} />
        <ListItemText
          primary="Delivery Address"
          secondary="Delivery Address"
          sx={{ margin: "0" }}
        />
      </Stack>
      <Stack>
        <Box>
          <Box sx={{ width: "100%", marginBottom: "12px" }}>
            <Input
              name="zipCode"
              value={zipCode}
              onChange={handleChange}
              placeholder="ZIP Code"
              sx={{
                backgroundColor: "#EDEDED",
                height: "36px",
                width: { xs: "100%", md: "25%" },
                border: "none !important",
                "&::before": {
                  border: "none !important",
                },
                "&::after": { border: "none !important" },
                "& input": {
                  padding: "0 10px",
                  width: "100%",
                  height: "100%",
                  outline: "none",
                  borderRadius: "5px",
                  border: `${
                    errors.zipCode ? "2px solid" : "1px solid"
                  }`,
                  borderColor: `${
                    errors.zipCode ? "red" : "background.darkgray"
                  }`,

                  transition: "0.3s",
                  "&:focus": {
                    border: "1px solid",
                    borderColor:"primary.dark"
                  },
                },
              }}
            />
            <Typography sx={{ color: "red" }}>{errors.zipCode}</Typography>
          </Box>
          <Box sx={{ width: "100%", marginBottom: "12px" }}>
            <Input
              name="street"
              value={street}
              onChange={handleChange}
              placeholder="Street"
              sx={{
                backgroundColor: "#EDEDED",
                height: "36px",
                width: "100%",
                border: "none !important",
                "&::before": {
                  border: "none !important",
                },
                "&::after": { border: "none !important" },
                "& input": {
                  padding: "0 10px",
                  width: "100%",
                  height: "100%",
                  outline: "none",
                  borderRadius: "5px",
                  border: `${
                    errors.street ? "2px solid" : "1px solid"
                  }`,
                  borderColor: `${
                    errors.street ? "red" : "background.darkgray"
                  }`,
                  transition: "0.3s",
                  "&:focus": {
                    border: "1px solid",
                    borderColor:"primary.dark"
                  },
                },
              }}
            />
            <Typography sx={{ color: "red" }}>{errors.street}</Typography>
          </Box>
          <Box
            display="flex"
            columnGap={1}
            rowGap={"12px"}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              marginBottom: "12px",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "33%" } }}>
              <Input
                name="number"
                value={number}
                onChange={handleChange}
                placeholder="Number"
                sx={{
                  backgroundColor: "#EDEDED",
                  height: "36px",
                  width: "100%",
                  border: "none !important",
                  "&::before": {
                    border: "none !important",
                  },
                  "&::after": { border: "none !important" },
                  "& input": {
                    padding: "0 10px",
                    width: "100%",
                    height: "100%",
                    outline: "none",
                    borderRadius: "5px",
                    transition: "0.3s",
                    border: `${
                      errors.number ? "2px solid" : "1px solid"
                    }`,
                    borderColor: `${
                      errors.number ? "red" : "background.darkgray"
                    }`,
                    "&:focus": {
                      border: "1px solid",
                      borderColor:"primary.dark"
                    },
                  },
                }}
              />
              <Typography sx={{ color: "red" }}>{errors.number}</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              position="relative"
              width="100%"
              height="36px"
            >
              <Input
                name="unit"
                value={unit}
                onChange={handleChange}
                placeholder="Unit"
                sx={{
                  backgroundColor: "#EDEDED",
                  height: "36px",
                  width: "100%",
                  border: "none !important",
                  "&::before": {
                    border: "none !important",
                  },
                  "&::after": { border: "none !important" },
                  "& input": {
                    padding: "0 10px",
                    width: "100%",
                    height: "100%",
                    outline: "none",
                    borderRadius: "5px",
                    border: `${
                      errors.unit ? "2px solid" : "1px solid"
                    }`,
                    borderColor: `${
                      errors.unit ? "red" : "background.darkgray"
                    }`,

                    transition: "0.3s",
                    "&:focus": {
                      border: "1px solid",
                      borderColor:"primary.dark"
                    },
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontStyle: "italic",
                  position: "absolute",
                  color: "#8D868698",
                  right: "5%",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                Optional
              </Typography>
              <Typography sx={{ color: "red" }}>{errors?.unit}</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            columnGap={1}
            rowGap={"12px"}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              height: { xs: "auto", md: "36px" },
              marginBottom: "12px",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "33.3%" } }}>
              <Input
                name="neighborhood"
                value={neighborhood}
                onChange={handleChange}
                placeholder="Neighborhood"
                sx={{
                  backgroundColor: "#EDEDED",
                  height: "36px",
                  width: "100%",
                  border: "none !important",
                  "&::before": {
                    border: "none !important",
                  },
                  "&::after": { border: "none !important" },
                  "& input": {
                    padding: "0 10px",
                    width: "100%",
                    height: "100%",
                    outline: "none",
                    borderRadius: "5px",
                    border: `${
                      errors.neighborhood ? "2px solid" : "1px solid"
                    }`,
                    borderColor: `${
                      errors.neighborhood ? "red" : "background.darkgray"
                    }`,
                    transition: "0.3s",
                    "&:focus": {
                      border: "1px solid",
                      borderColor:"primary.dark"
                    },
                  },
                }}
              />
              <Typography sx={{ color: "red" }}>
                {errors.neighborhood}
              </Typography>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "33.3%" } }}>
              <Input
                name="city"
                value={city}
                onChange={handleChange}
                placeholder="City"
                sx={{
                  backgroundColor: "#EDEDED",
                  height: "36px",
                  width: "100%",
                  border: "none !important",
                  "&::before": {
                    border: "none !important",
                  },
                  "&::after": { border: "none !important" },
                  "& input": {
                    padding: "0 10px",
                    width: "100%",
                    height: "100%",
                    outline: "none",
                    borderRadius: "5px",
                    border: `${
                      errors.city ? "2px solid" : "1px solid"
                    }`,
                    borderColor: `${
                      errors.city ? "red" : "background.darkgray"
                    }`,
                    transition: "0.3s",
                    "&:focus": {
                      border: "1px solid",
                      borderColor:"primary.dark"
                    },
                  },
                }}
              />
              <Typography sx={{ color: "red" }}>{errors.city}</Typography>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "33.3%" } }}>
              <Input
                name="state"
                value={state}
                onChange={handleChange}
                placeholder="State"
                sx={{
                  backgroundColor: "#EDEDED",
                  height: "36px",
                  width: "100%",
                  border: "none !important",
                  "&::before": {
                    border: "none !important",
                  },
                  "&::after": { border: "none !important" },
                  "& input": {
                    padding: "0 10px",
                    width: "100%",
                    height: "100%",
                    outline: "none",
                    borderRadius: "5px",
                    border: `${
                      errors.state ? "2px solid" : "1px solid"
                    }`,
                    borderColor: `${
                      errors.state ? "red" : "background.darkgray"
                    }`,
                    transition: "0.3s",
                    "&:focus": {
                      border: "1px solid",
                      borderColor:"primary.dark"
                    },
                  },
                }}
              />
              <Typography sx={{ color: "red" }}>{errors.state}</Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
