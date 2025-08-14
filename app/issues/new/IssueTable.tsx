"use client";

import TableType1 from "@/app/components/TableType1";
import { Chip } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";

interface IssueTableProps {
  rows: GridRowsProp;
}

const statusColor: Record<
  string,
  | "success"
  | "info"
  | "error"
  | "default"
  | "primary"
  | "secondary"
  | "warning"
  | undefined
> = {
  OPEN: "success",
  IN_PROGRESS: "info",
  CLOSED: "error",
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "title", headerName: "Title" },
  { field: "description", headerName: "Description", width: 200 },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params: GridRenderCellParams) => (
      <Chip
        variant="filled"
        label={params.value}
        size="small"
        color={statusColor[params.value as string] ?? "default"}
      />
    ),
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 180,
  },
  { field: "updatedAt", headerName: "Updated At", width: 180 },
];

const columnVisibilityModel = {
  // updatedAt: false,
  // createdAt: false,
};

const IssueTable = ({ rows }: IssueTableProps) => {
  return (
    <TableType1
      rows={rows}
      columns={columns}
      columnVisibilityModel={columnVisibilityModel}
    />
  );
};

export default IssueTable;
