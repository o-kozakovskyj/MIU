import ImageIcon from "@mui/icons-material/Image";
import {
  Tooltip,
  Fab,
  Box,
  Typography,
  Avatar,
  Modal,
  TextField,
  Stack,
  Button,
  ButtonGroup,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import "@fontsource/roboto/700.css";
import { DateRange, Mood, PersonAdd, Videocam } from "@mui/icons-material";

const Add = () => {
  const [open, SetOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 20 },
        }}
      >
        <Fab color="primary" aria-label="add" onClick={() => SetOpen(true)}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        onClose={() => SetOpen(false)}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          borderRadius={2}
          p={3}
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color={"grey"} textAlign={"center"}>
            Create new post
          </Typography>
          <Box
            sx={{
              display: "flex",
              allignItems: "center",
              justifyContent: "start",
              gap: "20px",
              mb: "10px",
            }}
          >
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Typography component={"span"} fontWeight={700}>
              John Doe
            </Typography>
          </Box>
          <TextField
            sx={{ width: "98%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            defaultValue="What is on your mind?"
            variant="standard"
          />
          <Stack flexDirection={"row"} gap={"10px"} mt={"20px"}>
            <Mood color="warning" />
            <ImageIcon color="primary" />
            <Videocam sx={{ color: "#009688" }} />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
            sx={{ mt: "20px" }}
          >
            <Button>Post</Button>
            <Button sx={{ width: "90px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};
export default Add;
