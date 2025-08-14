import { prisma } from "@/prisma/prisma";
import { Box } from "@mui/material";
import Link from "next/link";
import { notFound } from "next/navigation";
import CardType1 from "./CardType1";
import EditIssueButton from "./EditIssueButton";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <Box
      // justifyContent={"left"}
      alignItems={"stretch"}
    >
      <CardType1 issue={issue} />
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        mt={2}
      >
        <Link href={`/issues/${issue.id}/edit`}>
          <EditIssueButton />
        </Link>
      </Box>
    </Box>
  );
};

export default IssueDetailPage;
