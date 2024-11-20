import { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  // Grid,
  Typography,
  // Button,
  // Checkbox,
  // FormControlLabel,
  // Link,
  // Stack,
} from "@mui/material";
// import { supData } from "../SupData";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";

export default function Order({ numberOfSessions, selectedSubscription }) {
  const { t } = useTranslation();

  const [selectedDuration, setSelectedDuration] = useState(null);
  const [payInAdvance, setPayInAdvance] = useState(false);

  // Handle duration selection
  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
  };

  // Get the selected subscription data
  // const selectedSubscription = supData.find(
  //   (item) => item.duration === selectedDuration
  // );

  // If additional discount for paying in advance is needed
  const calculateAdditionalDiscount = (price) => {
    return payInAdvance ? price * 0.05 : 0; // 5% extra discount
  };
  return (
    <Box sx={{ backgroundColor: "#F5F7F9" }}>
      {selectedSubscription && (
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={payInAdvance}
                onChange={(e) => setPayInAdvance(e.target.checked)}
              />
            }
            label="Pay in advance - EXTRA 5% DISCOUNT"
          />
        </Grid>
      )}
      <Stack
        direction={"row"}
        sx={{ justifyContent: "space-between", color: "#B3B1B1" }}
      >
        <Typography>
          <strong>NUMBER OF SESSIONS P.M.:</strong>
        </Typography>
        <Typography>{numberOfSessions} Sessions</Typography>
      </Stack>

      {selectedSubscription && (
        <>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", color: "#B3B1B1" }}
          >
            <Typography>
              <strong>REGULAR PRICE:</strong>{" "}
            </Typography>
            <Typography>${selectedSubscription.regularPrice}</Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", color: "#B3B1B1" }}
          >
            <Typography>
              <strong>YOUR PRICE:</strong>
            </Typography>
            <Typography>${selectedSubscription.yourPrice}</Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", color: "#7ED36D" }}
          >
            <Typography>
              <strong>DISCOUNT:</strong>
            </Typography>
            <Typography>${selectedSubscription.discount}</Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", color: "#B3B1B1" }}
          >
            <Typography>
              <strong>SETUP FEE:</strong>
            </Typography>
            <Typography sx={{ color: "#4E5FEE" }}>
              ${selectedSubscription.setupFee}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", color: "#B3B1B1" }}
          >
            <Typography>
              <strong>TOTAL P.M.:</strong>{" "}
            </Typography>
            <Typography sx={{ color: "#4E5FEE" }}>
              ${selectedSubscription.totalPrice}
            </Typography>
          </Stack>
        </>
      )}
    </Box>
  );
}
