import { prisma } from "@/prisma/prisma";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";
import CardType1 from "./CardType1";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <Box>
      <CardType1 issue={issue} />
    </Box>
  );
};

export default IssueDetailPage;
