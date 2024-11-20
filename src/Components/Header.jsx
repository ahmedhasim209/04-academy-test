import { Box, Stack, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box>
      <Stack sx={{ pb: 3 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontSize: "20px",
            pt: 3,
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          registration & booking at GoStudent
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "15px",
            pb: 1,
          }}
        >
          The landing platform for online tutoring
        </Typography>
      </Stack>
    </Box>
  );
}
