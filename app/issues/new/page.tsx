"use client";

import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm<IssueForm>();

  return (
    <Box
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/issues", data);
          router.push("/issues");
        } catch (error) {
          setError("Unexpected Error");
        }
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
        onClick={() => setError("")}
        type="submit"
        variant="contained"
      >
        Submit New Issue
      </Button>

      {/* Alert */}

      {error !== "" && (
        <Alert
          sx={{ marginTop: "10px" }}
          severity="error"
          variant="outlined"
          onClose={() => setError("")}
        >
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default NewIssuePage;
