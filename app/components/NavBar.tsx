"use client";
import { Home } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  Stack,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { label: "Dashboard", url: "/dashboard" },
  { label: "Issues", url: "/issues" },
];

const NavBar = () => {
  const theme = useTheme();
  const [value, setValue] = useState<string | null>(null);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Stack
        direction={"row"}
        // bgcolor={"GrayText"}
        display={"flex"}
        width={"100vh"}
        alignItems={"center"}
      >
        {/* Home Icon */}

        <Box
          width={"50px"}
          textAlign={"center"}
        >
          <Link href="/">
            <Home fontSize="medium" />
          </Link>
        </Box>

        {/* Navigation */}

        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
        >
          {links.map((link) => (
            <BottomNavigationAction
              component={Link}
              value={link.label}
              key={link.label}
              label={link.label}
              href={link.url}
            />
          ))}
        </BottomNavigation>
      </Stack>
      <Divider />
    </Box>
  );
};

export default NavBar;
