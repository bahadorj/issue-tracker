import { prisma } from "@/prisma/prisma";
import { Box, Button, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import IssueTable from "./IssueTable";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "title", headerName: "Title" },
    { field: "description", headerName: "Description", width: 200 },
    { field: "status", headerName: "Status" },
    { field: "createdAt", headerName: "Created At", width: 180 },
    { field: "updatedAt", headerName: "Updated At", width: 180 },
  ];
  return (
    <Box>
      <Typography variant="h3">Issues</Typography>
      <IssueTable
        rows={issues}
        columns={columns}
      />
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
