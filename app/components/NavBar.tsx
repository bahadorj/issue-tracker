"use client";
import { Home } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  Stack,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Dashboard", url: "/dashboard" },
  { label: "Issues", url: "/issues" },
];

const NavBar = () => {
  const path = usePathname();

  return (
    <Box>
      <Stack
        direction={"row"}
        // bgcolor={"GrayText"}
        display={"flex"}
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
          value={links.find((link) => link.url === path)?.label}
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
      {path}
      <Divider sx={{ marginBottom: "20px" }} />
    </Box>
  );
};

export default NavBar;
