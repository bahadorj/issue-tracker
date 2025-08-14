import { prisma } from "@/prisma/prisma";
import { Box, Button, Stack, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import CardType1 from "./CardType1";
import Link from "next/link";
import { Edit, EditDocument } from "@mui/icons-material";

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
          <Button
            variant="contained"
            size="small"
          >
            <EditDocument fontSize="small" />
            <Typography marginLeft={2}>Update</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default IssueDetailPage;
