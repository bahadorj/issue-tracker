"use client";

import { Box, Button, Typography } from "@mui/material";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridColumnVisibilityModel,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TableType1Props {
  rows: GridRowsProp;
  columns: GridColDef[];
  columnVisibilityModel: GridColumnVisibilityModel;
  link: string;
}

const TableType1 = ({
  rows,
  columns,
  link,
  columnVisibilityModel,
}: TableType1Props) => {
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>({ type: "include", ids: new Set() });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid hydration mismatch by rendering only after mount
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const selectedId = Array.from(rowSelectionModel.ids)[0];

  return (
    <Box
      height={500}
      marginTop={2}
      marginBottom={2}
    >
      <Box height={400}>
        <DataGrid
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
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
      <Link href={`${link}${selectedId}`}>
        <Button
          disabled={rowSelectionModel.ids.size === 0}
          sx={{ marginTop: 2 }}
          variant="contained"
          color="secondary"
        >
          {`Go to detail page of issue id:  ${selectedId}`}
        </Button>
      </Link>
    </Box>
  );
};

export default TableType1;
