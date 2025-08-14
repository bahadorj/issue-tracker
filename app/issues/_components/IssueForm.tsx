"use client";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import { z } from "zod";
import { Issue } from "@/app/generated/prisma";

type IssueFormData = z.infer<typeof createIssueSchema>;

interface Props {
  issue?: Issue;
}

// interface IssueFormData {
//   title: string;
//   description: string;
// }

const IssueForm = ({ issue }: Props) => {
  // Hooks
  const router = useRouter();
  // const [error, setError] = useState("");

  // react-hook-form - useForm
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema),
    defaultValues: {
      description: "description",
    },
  });

  const onSubmit: SubmitHandler<IssueFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      // axios - post
      await axios.post("/api/issues", data);
      // useRouter - push
      router.push("/issues");
    } catch (error) {
      setError("root", { message: "useForm -> setError -> root Error" });
    }
  };

  return (
    <Box
      component={"form"}
      sx={{ width: 400 }}
      // react-hook-form - handleSubmit
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h3">New Issue</Typography>
      <TextField
        // react-hook-form - register
        {...register("title")}
        defaultValue={issue?.title}
        fullWidth
        variant="outlined"
        label="Issue"
        size="small"
        margin="dense"
      />
      {errors.title && <Alert severity="error">{errors.title.message}</Alert>}
      <TextField
        // react-hook-form - register
        {...register("description")}
        defaultValue={issue?.description}
        fullWidth
        variant="outlined"
        label="Description"
        size="small"
        multiline
        margin="dense"
        rows={3}
      />
      {errors.description && (
        <Alert severity="error">{errors.description.message}</Alert>
      )}
      <Button
        disabled={isSubmitting}
        type="submit"
        variant="contained"
      >
        {!isSubmitting ? "Submit New Issue" : "Submiting..."}
        {isSubmitting && (
          <CircularProgress
            size={20}
            color="inherit"
          />
        )}
      </Button>

      {/* Alert */}

      {errors.root && (
        <Alert
          sx={{ marginTop: "10px" }}
          severity="error"
          variant="outlined"
        >
          {errors.root.message}
        </Alert>
      )}
    </Box>
  );
};

export default IssueForm;
