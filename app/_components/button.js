import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import "@/app/variables.scss";

export default function ButtonCTA({ textButtom, disabled, size, type = false }) {
  const CustomButton = styled(Button)(() => ({
    paddingTop: size === "small" ? "4px" : "12px",
    paddingBottom: size === "small" ? "4px" : "12px",
    borderRadius: size === "small" ? "6px" : "12px",
    backgroundColor: disabled ? "rgba(0, 0, 0, 0.2)" : !type && "#0d7cc4", // $secondary-color
    "&:hover": {
      backgroundColor: disabled ? "rgba(0, 0, 0, 0.2)" : !type &&"#51a6dd", // $primary-color 
    },
    width: "100%",
    maxWidth: "348px",
    fontWeight: size === "small" ? "500" : "600",
    textTransform: "none",
    fontSize: size === "small" ? "0.875rem" : "1.1rem",
  }));

  return (
    <CustomButton variant={type ? "outlined" : "contained"} disableElevation>
      {textButtom}
    </CustomButton>
  );
}
