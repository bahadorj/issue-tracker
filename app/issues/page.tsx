import { prisma } from "@/prisma/prisma";
import { Box, Button, Typography } from "@mui/material";
import IssueTable from "./IssueTable";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

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
