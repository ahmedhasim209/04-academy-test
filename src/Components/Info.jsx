import {
  Box,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  InputAdornment,
} from "@mui/material";
import Header from "./Header";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Flag from "react-world-flags";

const currencies = [
  {
    value: "Country",
    label: "Country",
  },
  {
    value: "Egypt",
    label: "Egypt",
  },
  {
    value: "Palestine",
    label: "Palestine",
  },
];
const sessions = [
  {
    value: 8,
    label: "8 Sessions",
  },
  {
    value: 12,
    label: "12 Sessions",
  },
  {
    value: 16,
    label: "16 Sessions",
  },
];
const countries = [
  { iso: "EG", code: "+20", name: "Egypt" },
  { iso: "US", code: "+1", name: "United States" },
  { iso: "GB", code: "+44", name: "United Kingdom" },
  { iso: "IN", code: "+91", name: "India" },
];

// eslint-disable-next-line react/prop-types
export default function Info({ numberOfSessions, setNumberOfSessions }) {
  const handleChange = (event) => {
    setNumberOfSessions(event.target.value); // Update the selected session value in the parent
  };
  const [selectedValue, setSelectedValue] = useState("");

  const [firstInput, setFirstInput] = useState({
    selectedCountry: countries[0],
    phoneNumber: "",
  });

  const [secondInput, setSecondInput] = useState({
    selectedCountry: countries[0],
    phoneNumber: "",
  });

  const handleCountryChange = (inputNumber, event) => {
    const newCountry = countries.find(
      (country) => country.iso === event.target.value
    );
    if (inputNumber === 1) {
      setFirstInput((prev) => ({ ...prev, selectedCountry: newCountry }));
    } else {
      setSecondInput((prev) => ({ ...prev, selectedCountry: newCountry }));
    }
  };

  const handlePhoneNumberChange = (inputNumber, event) => {
    if (inputNumber === 1) {
      setFirstInput((prev) => ({ ...prev, phoneNumber: event.target.value }));
    } else {
      setSecondInput((prev) => ({ ...prev, phoneNumber: event.target.value }));
    }
  };

  const handleChangePayment = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box>
      <Header />
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        noValidate
        autoComplete="on"
      >
        <Stack direction={"row"} sx={{ width: "100%", alignItems: "center" }}>
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              fontSize: "15px",
              color: "#00000078",
            }}
          >
            login phone number
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "10px", ml: "5px" }}>
            (preferably the student&apos;s)
          </Typography>
        </Stack>
        {/* Integrated Phone Input with Dropdown */}
        <TextField
          fullWidth
          variant="outlined"
          value={firstInput.phoneNumber}
          onChange={(e) => handlePhoneNumberChange(1, e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TextField
                  select
                  value={firstInput.selectedCountry.iso}
                  onChange={(e) => handleCountryChange(1, e)}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    "& .MuiSelect-select": {
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    },
                    "& .MuiMenuItem-root": {
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    },
                    minWidth: 80,
                    border: "none",
                    padding: "0 4px",
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.iso} value={country.iso}>
                      <Flag
                        code={country.iso}
                        style={{
                          width: 20,
                          height: 14,
                          borderRadius: "2px",
                        }}
                      />
                      {country.code}
                    </MenuItem>
                  ))}
                </TextField>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              paddingLeft: 0, // Remove padding around the dropdown
            },
            backgroundColor: "#80808024",
          }}
        />
        <Stack direction={"row"} sx={{ width: "100%", alignItems: "center" }}>
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              fontSize: "15px",
              color: "#00000078",
            }}
          >
            contact phone number
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "10px", ml: "5px" }}>
            (preferably the parent&apos;s)
          </Typography>
        </Stack>
        {/* Integrated Phone Input with Dropdown */}
        <TextField
          fullWidth
          variant="outlined"
          value={secondInput.phoneNumber}
          onChange={(e) => handlePhoneNumberChange(2, e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TextField
                  select
                  value={secondInput.selectedCountry.iso}
                  onChange={(e) => handleCountryChange(2, e)}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{
                    "& .MuiSelect-select": {
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    },
                    "& .MuiMenuItem-root": {
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    },
                    minWidth: 80,
                    border: "none",
                    padding: "0 4px",
                  }}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.iso} value={country.iso}>
                      <Flag
                        code={country.iso}
                        style={{
                          width: 20,
                          height: 14,
                          borderRadius: "2px",
                        }}
                      />
                      {country.code}
                    </MenuItem>
                  ))}
                </TextField>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              paddingLeft: 0, // Remove padding around the dropdown
            },
            backgroundColor: "#80808024",
          }}
        />
        <Stack direction={"row"} sx={{ width: "100%", alignItems: "center" }}>
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              fontSize: "15px",
              color: "#00000078",
            }}
          >
            contact email address
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "10px", ml: "5px" }}>
            (preferably the parent&apos;s)
          </Typography>
        </Stack>
        <TextField
          sx={{ backgroundColor: "#80808024" }}
          id="outlined-basic"
          variant="outlined"
        />
        <Stack direction={"row"} sx={{ width: "100%", alignItems: "center" }}>
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              fontSize: "15px",
              color: "#00000078",
            }}
          >
            conact name
          </Typography>
        </Stack>
        <TextField
          sx={{ backgroundColor: "#80808024" }}
          id="outlined-basic"
          variant="outlined"
        />
        <Stack direction={"row"} sx={{ width: "100%", alignItems: "center" }}>
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              fontSize: "15px",
              color: "#00000078",
            }}
          >
            billing address
          </Typography>
        </Stack>
        <Stack direction={"row"} sx={{ gap: 1 }}>
          <TextField
            sx={{ backgroundColor: "#80808024", width: "120%" }}
            id="outlined-basic"
            variant="outlined"
            label="Address"
          />
          <TextField
            sx={{ backgroundColor: "#80808024" }}
            id="outlined-basic"
            variant="outlined"
            label="Nr"
          />
        </Stack>
        <Stack direction={"row"} sx={{ gap: 1 }}>
          <TextField
            sx={{ backgroundColor: "#80808024", flex: 1 }}
            id="outlined-basic"
            variant="outlined"
            label="Postal Code"
          />
          <TextField
            sx={{ backgroundColor: "#80808024", flex: 1 }}
            id="outlined-basic"
            variant="outlined"
            label="City"
          />
          <TextField
            sx={{ backgroundColor: "#80808024", flex: 1 }}
            id="outlined-select-currency"
            select
            defaultValue="Country"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack direction={"row"} sx={{ width: "100%", alignItems: "center" }}>
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              fontSize: "15px",
              color: "#00000078",
            }}
          >
            monthly sessions
          </Typography>
        </Stack>
        <TextField
          sx={{ backgroundColor: "#80808024", flex: 1 }}
          id="outlined-select-sessions"
          select
          value={numberOfSessions} // Controlled component to reflect the selected value
          onChange={handleChange} // Update parent state on selection
          label="Sessions per Month"
        >
          {sessions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* ========== payment part ========= */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              fontSize: "15px",
              color: "#00000078",
            }}
            gutterBottom
          >
            Select Payment Method
          </Typography>
          <FormControl>
            <RadioGroup value={selectedValue} onChange={handleChangePayment}>
              {/* Option 1: SEPA */}
              <FormControlLabel
                value="sepa"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center" sx={{ flex: 1 }}>
                    <img
                      src="/images/sepa.webp"
                      alt="SEPA"
                      style={{ width: 50, marginRight: 8 }}
                    />
                  </Box>
                }
              />
              {/* Option 2: Credit Card */}
              <FormControlLabel
                value="creditCard"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center">
                    <img
                      src="/images/visaPaymentMethod.jpg"
                      alt="Credit Cards"
                      style={{ width: 100, marginRight: 8 }}
                    />
                  </Box>
                }
              />
            </RadioGroup>
            {/* Conditionally Render Credit Card Fields */}
            {selectedValue === "creditCard" && (
              <Box>
                <TextField
                  label="Card Holder"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  sx={{ backgroundColor: "#80808024", flex: 1, mt: 1 }}
                />
                <TextField
                  label="Card Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="1234 5678 9012 3456"
                  sx={{ backgroundColor: "#80808024", flex: 1 }}
                />
              </Box>
            )}
          </FormControl>
        </Box>
        {/* Optional Info */}
        <Typography
          variant="caption"
          color="textSecondary"
          mt={1} // Adjust spacing dynamically
          sx={{ fontStyle: "italic" }}
        >
          100% secure payment. All data is encrypted.
        </Typography>
      </Box>
    </Box>
  );
}
