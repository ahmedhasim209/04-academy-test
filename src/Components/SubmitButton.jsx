import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SubmitButton = ({ selectedDuration, termsAccepted }) => {
  return (
    <Button
      variant="contained"
      sx={{
        marginTop: "20px",
        backgroundColor: selectedDuration && termsAccepted ? "#007BFF" : "#ccc",
        color: selectedDuration && termsAccepted ? "#fff" : "#777",
        pointerEvents: selectedDuration && termsAccepted ? "auto" : "none", // Disable button functionality
        textTransform: "none",
        padding: "10px 20px",
        fontSize: "16px",
        width: "100%",
      }}
      disabled={!selectedDuration || !termsAccepted} // Ensure it's truly disabled
    >
      Order Now
    </Button>
  );
};

export default SubmitButton;
