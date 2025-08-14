"use client";

import { Box } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

interface IssueTableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
}

const IssueTable = ({ rows, columns }: IssueTableProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid hydration mismatch by rendering only after mount
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Box
      height={500}
      marginTop={2}
      marginBottom={2}
    >
      <DataGrid
        showToolbar
        sx={{
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold", // or '600', '700', etc.
          },
        }}
        rows={rows}
        columns={columns}
        density="compact"
      />
    </Box>
  );
};

export default IssueTable;
