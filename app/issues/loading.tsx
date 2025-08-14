"use client";

import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingIssuesPage = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"fixed"}
      top={0}
      left={0}
      width={"100vw"}
      height={"100vh"}
      flexDirection={"column"}
    >
      <CircularProgress color="secondary" />
      <Typography
        marginTop={1}
        variant="h6"
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingIssuesPage;
