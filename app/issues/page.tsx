import { prisma } from "@/prisma/prisma";
import { Box, Button, Chip, Typography } from "@mui/material";
import React from "react";
import IssueTable from "./new/IssueTable";
import delay from "delay";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);

  return (
    <Box>
      <Typography variant="h3">Issues</Typography>
      <IssueTable rows={issues} />

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
