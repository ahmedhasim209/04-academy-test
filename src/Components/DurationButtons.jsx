import { Box, Button } from "@mui/material";

const DurationButtons = ({
  // eslint-disable-next-line react/prop-types
  supData,
  // eslint-disable-next-line react/prop-types
  selectedDuration,
  // eslint-disable-next-line react/prop-types
  setSelectedDuration,
}) => {
  return (
    <Box
      sx={{ backgroundColor: "#F5F7F9" }}
      display="flex"
      flexWrap="wrap"
      gap={2}
      my={2}
    >
      {supData.map((subscription) => (
        <Button
          key={subscription.duration}
          variant={
            selectedDuration === subscription.duration
              ? "contained"
              : "outlined"
          }
          onClick={() => setSelectedDuration(subscription.duration)}
          sx={{
            flex: "1 1 calc(30% - 8px)", // Responsive sizing
            minWidth: "100px",
            textTransform: "none",
            padding: "10px 20px",
            border:
              selectedDuration === subscription.duration
                ? "2px solid #007BFF"
                : "1px solid #ccc",
            backgroundColor:
              selectedDuration === subscription.duration ? "#007BFF" : "#fff",
            color: selectedDuration === subscription.duration ? "#fff" : "#000",
            "&:hover": {
              backgroundColor:
                selectedDuration === subscription.duration
                  ? "#0056b3"
                  : "#f0f0f0",
            },
          }}
        >
          {subscription.duration}
        </Button>
      ))}
    </Box>
  );
};

export default DurationButtons;
