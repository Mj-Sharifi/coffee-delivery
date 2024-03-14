import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToList } from "../../../Store/Slices/cartSlice";

export default function CoffeeCard({ item,handleToast }) {
  const dispatch = useDispatch();
  const { img, title, description, price, tags } = item;

  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity((state) => state + 1);
  };
  const handleDecrease = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity((state) => state - 1);
    }
  };

  const handleCart = ({ item, quantity }) => {
    dispatch(addToList({ item, quantity }));
    handleToast(quantity,title)
    setQuantity(1);
  };
  return (
    <Grid item xs={10} sm={6} md={4} lg={3}>
      <Card
        sx={{
          position: "relative",
          overflow: "visible",
          bgcolor: "background.lightgray",
          borderRadius: "10px 40px 10px 40px",
          height: "270px",
        }}
        elevation={1}
      >
        <CardMedia
          src={`assets/images/Products/${img}`}
          alt={title}
          title={title}
          component="img"
          sx={{
            position: "absolute",
            width: "100px",
            height: "100px",
            top: "-50px",
            left: "50%",
            transform: "translate(-50%)",
          }}
        ></CardMedia>
        <CardContent sx={{ padding: "55px 20px 10px 20px" }}>
          <Stack direction="row" justifyContent="center" gap={1}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                sx={{ bgcolor: "primary.main", color: "primary.dark" }}
              />
            ))}
          </Stack>
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            textAlign="center"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            gutterBottom
            textAlign="center"
          >
            {description}
          </Typography>
          <Stack
            position={"absolute"}
            bottom={"20px"}
            right={"50%"}
            direction="row"
            gap={2}
            marginTop={4}
            justifyContent="space-between"
            alignItems="center"
            sx={{transform:"translateX(50%)"}}
          >
            <Typography variant="h6" component="p">
              ${price}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              backgroundColor="background.darkgray"
              borderRadius={1}
              paddingX={1}
            >
              <IconButton onClick={handleDecrease}>
                <Remove
                  fontSize="small"
                  sx={{ color: "secondary.dark", cursor: "pointer" }}
                />
              </IconButton>

              <Typography variant="subtitle1" sx={{ fontSize: "1.2rem" }}>
                {quantity}
              </Typography>
              <IconButton onClick={handleIncrease}>
                <Add
                  fontSize="small"
                  sx={{ color: "secondary.dark", cursor: "pointer" }}
                />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "secondary.main",
                color: "background.lightgray",
                minWidth: "0",
                padding: "5px",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "background.lightgray",
                  boxShadow: "0px 0px 6px 3px #4B299580",
                },
              }}
              onClick={() => handleCart({ item, quantity })}
            >
              <ShoppingCart />
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
