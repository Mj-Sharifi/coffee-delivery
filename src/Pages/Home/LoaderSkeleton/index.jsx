import { Card, CardContent, Skeleton, Grid, Stack } from "@mui/material";
import React from "react";

export default function LoaderSkeleton({ item, handleToast }) {
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
        <Skeleton
          variant="circular"
          sx={{
            position: "absolute",
            width: "100px",
            height: "100px",
            top: "-50px",
            left: "50%",
            transform: "translate(-50%)",
          }}
        ></Skeleton>
        <CardContent sx={{ padding: "55px 20px 10px 20px" }}>
          <Skeleton
            variant="rounded"
            width={"60px"}
            height={"25px"}
            sx={{ borderRadius: "40%", marginX: "auto", marginBottom: "10px" }}
          />

          <Skeleton variant="text" height={"25px"} />
          <Skeleton variant="text" height={"50px"} />
          <Stack
            width={"100%"}
            position={"absolute"}
            bottom={"20px"}
            right={"50%"}
            direction="row"
            gap={2}
            marginTop={4}
            justifyContent="space-between"
            alignItems="center"
            sx={{ transform: "translateX(50%)" }}
            px={1}
          >
            <Skeleton variant="text" width={"15%"} height={"40px"} />
            <Skeleton variant="rounded" width={"40%"} height={"40px"} />
            <Skeleton variant="rounded" width={"15%"} height={"40px"} />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
