import { Box, VStack, Button, useColorModeValue } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const sidebarBg = useColorModeValue("#2563EB", "#224196ff");
  const buttonBg = useColorModeValue("white", "whiteAlpha.400");
  const buttonColor = useColorModeValue("#1E40AF", "white");
  const buttonHover = useColorModeValue("gray.100", "whiteAlpha.300");
  const activeBg = useColorModeValue("gray.400", "whiteAlpha.500");
  const activeColor = useColorModeValue("#1E40AF", "#1E40AF");

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
            bg={location.pathname === "/SiriusAdminAdd" ? activeBg : buttonBg}
            color={
              location.pathname === "/SiriusAdminAdd"
                ? activeColor
                : buttonColor
            }
            _hover={{ bg: buttonHover }}
          >
            Add Agents
          </Button>
        </Link>

        <Link to="/SiriusAdminDelete">
          <Button
            w="100%"
            bg={
              location.pathname === "/SiriusAdminDelete" ? activeBg : buttonBg
            }
            color={
              location.pathname === "/SiriusAdminDelete"
                ? activeColor
                : buttonColor
            }
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
