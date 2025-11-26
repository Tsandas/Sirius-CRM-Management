import { Box, VStack, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarBg = useColorModeValue("#2563EB", "#224196ff");
  const buttonBg = useColorModeValue("white", "whiteAlpha.400");
  const buttonColor = useColorModeValue("#1E40AF", "white");
  const buttonHover = useColorModeValue("gray.100", "whiteAlpha.300");

  return (
    <Box
      position="fixed"
      top="64px"
      left={0}
      w="250px"
      bg={sidebarBg}
      h="calc(100vh - 64px)"
      display={{ base: "none", md: "block" }}
      color="white"
      boxShadow="md"
    >
      <VStack align="start" spacing={6} padding={5}>
        <Link to="/SiriusAdminAdd">
          <Button
            w="100%"
            bg={buttonBg}
            color={buttonColor}
            _hover={{ bg: buttonHover }}
          >
            Add Agents
          </Button>
        </Link>

        <Link to="/SiriusAdminDelete">
          <Button
            w="100%"
            bg={buttonBg}
            color={buttonColor}
            _hover={{ bg: buttonHover }}
          >
            Delete Agents
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
