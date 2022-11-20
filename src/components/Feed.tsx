import PostCard from "./PostCard";
import { Box } from "@mui/system";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Box>
  );
};
export default Feed;
