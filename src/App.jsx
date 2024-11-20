import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import Info from "./Components/Info";
import Order from "./Components/Order";
import { supData } from "./SupData";
import { useState } from "react";
import DurationButtons from "./Components/DurationButtons";
import SubmitButton from "./Components/SubmitButton";

function App() {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [numberOfSessions, setNumberOfSessions] = useState(8); // Default to 8 Sessions

  const selectedSubscription = supData.find(
    (item) => item.duration === selectedDuration
  );
  // eslint-disable-next-line no-unused-vars
  function setTermsAccepted(_checked) {
    throw new Error("Function not implemented.");
  }

  return (
    <Box style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <Stack>
        {/* Info Component */}
        <Info
          numberOfSessions={numberOfSessions}
          setNumberOfSessions={setNumberOfSessions}
        />

        <Stack sx={{ backgroundColor: "#F5F7F9", p: 3 }}>
          <Typography sx={{ backgroundColor: "#F5F7F9" }} variant="h6">
            Order Overview
          </Typography>

          {/* Duration Buttons */}
          <DurationButtons
            supData={supData}
            selectedDuration={selectedDuration}
            setSelectedDuration={setSelectedDuration}
          />
          {/* Order Overview */}
          <Order
            numberOfSessions={numberOfSessions}
            selectedSubscription={selectedSubscription}
          />

          {/* Terms and Conditions Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                // @ts-ignore
                checked={setTermsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
            }
            label={
              <Typography>
                I accept the{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                  terms & conditions
                </a>{" "}
                and understand my rights.
              </Typography>
            }
            sx={{ marginTop: "16px", backgroundColor: "#F5F7F9" }}
          />

          {/* Submit Button */}
          <SubmitButton
            selectedDuration={selectedDuration}
            termsAccepted={setTermsAccepted}
          />
          <Typography
            sx={{ backgroundColor: "#F5F7F9", textAlign: "center", pt: 2 }}
            variant="h6"
          >
            95% satisfaction rate
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
