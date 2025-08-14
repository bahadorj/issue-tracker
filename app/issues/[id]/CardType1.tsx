"use client";

import { ExpandMore } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
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
        <Typography>{issue.status}</Typography>
        <Typography variant="body2">{`Created at: ${issue.createdAt.toISOString()}`}</Typography>
        <Typography variant="body2">{`Updated at: ${issue.updatedAt.toISOString()}`}</Typography>
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
          <Typography>{issue.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardType1;
