"use client";

import { Box } from "@mui/material";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridColumnVisibilityModel,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";

interface TableType1Props {
  rows: GridRowsProp;
  columns: GridColDef[];
  columnVisibilityModel: GridColumnVisibilityModel;
}

const TableType1 = ({
  rows,
  columns,
  columnVisibilityModel,
}: TableType1Props) => {
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
        columnVisibilityModel={columnVisibilityModel}
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

export default TableType1;
