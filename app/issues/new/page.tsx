import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const NewIssuePage = () => {
  return (
    <Box sx={{ width: 400 }}>
      <Typography variant="h3">New Issue</Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Issue"
        size="small"
        margin="dense"
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Description"
        size="small"
        multiline
        maxRows={3}
        margin="dense"
        rows={3}
      />
      <Button variant="contained">Submit New Issue</Button>
    </Box>
  );
};

export default NewIssuePage;
