import { Box, Button, Typography } from "@mui/material";
import React from "react";

const IssuesPage = () => {
  return (
    <Box>
      <Typography variant="h3">Issues</Typography>
      <Button
        variant="contained"
        type="button"
        href="/issues/new"
      >
        New Issue
      </Button>
    </Box>
  );
};

export default IssuesPage;
