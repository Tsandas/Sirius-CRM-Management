import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      position="fixed"
      top="64px"
      left={0}
      w="250px"
      bg="#2563EB"
      h="calc(100vh - 64px)"
    >
      <VStack align="start" spacing={10} padding={5}>
        <Link to="/SiriusAdminAdd">
          <Button w="100%">Add Agents</Button>
        </Link>
        <Link to="/SiriusAdminDelete">
          <Button w="100%">Delete Agents</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
