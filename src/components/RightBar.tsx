import Box from "@mui/material/Box/Box";

const RightBar = () => {
  return (
    <Box
      bgcolor={"lightcoral"}
      p={2}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      RightBar
    </Box>
  );
};
export default RightBar;
