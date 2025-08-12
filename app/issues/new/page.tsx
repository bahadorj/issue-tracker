"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IssueForm>();

  return (
    <Box
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
      component={"form"}
      sx={{ width: 400 }}
    >
      <Typography variant="h3">New Issue</Typography>
      <TextField
        {...register("title")}
        fullWidth
        variant="outlined"
        label="Issue"
        size="small"
        margin="dense"
      />
      <TextField
        {...register("description")}
        fullWidth
        variant="outlined"
        label="Description"
        size="small"
        multiline
        margin="dense"
        rows={3}
      />
      <Button
        type="submit"
        variant="contained"
      >
        Submit New Issue
      </Button>
    </Box>
  );
};

export default NewIssuePage;
