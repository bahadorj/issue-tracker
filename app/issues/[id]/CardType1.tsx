"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  Stack,
  Typography,
} from "@mui/material";
import { statusColor } from "@/app/components/consts";

import React, { useReducer } from "react";

const CardType1 = ({ issue }) => {
  const [expand, toggleExpand] = useReducer((a) => !a, false);

  return (
    <Card>
      <CardHeader
        title={issue.title}
        subheader={`ID: ${issue.id}`}
      />
      <CardContent>
        <Chip
          sx={{ marginBottom: 1 }}
          size="small"
          label={issue.status}
          color={statusColor[issue.status]}
        ></Chip>
        <Stack>
          <Typography variant="caption">{`Created at: ${issue.createdAt.toISOString()}`}</Typography>
          <Typography variant="caption">{`Updated at: ${issue.updatedAt.toISOString()}`}</Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ flexDirection: "row-reverse" }}>
        <Button
          variant="outlined"
          size="small"
          onClick={toggleExpand}
        >
          {expand ? "Less Information" : "More Information"}
        </Button>
      </CardActions>
      <Collapse in={expand}>
        <CardContent>
          <Typography variant="h6">Description</Typography>
          <Typography
            marginInlineStart={1}
            variant="body2"
          >
            {issue.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardType1;
