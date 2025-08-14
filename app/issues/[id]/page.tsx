import { prisma } from "@/prisma/prisma";
import { Box, Typography } from "@mui/material";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "number") notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <Box>
      <Typography>{issue.id}</Typography>
      <Typography>{issue.title}</Typography>
      <Typography>{issue.description}</Typography>
      <Typography>{issue.status}</Typography>
      <Typography>{issue.createdAt.toISOString()}</Typography>
      <Typography>{issue.updatedAt.toISOString()}</Typography>
    </Box>
  );
};

export default IssueDetailPage;
