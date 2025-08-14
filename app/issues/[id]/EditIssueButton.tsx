import { EditDocument } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";

const EditIssueButton = () => {
  return (
    <Button
      variant="contained"
      size="small"
    >
      <EditDocument fontSize="small" />
      <Typography marginLeft={2}>Edit Issue</Typography>
    </Button>
  );
};

export default EditIssueButton;
