import React from "react";
import {
  Container,
  Flex,
  Text,
  Button,
  IconButton,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMoon, IoMenu } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const headerBg = useColorModeValue("#1E40AF", "#1E3A8A");
  const drawerBg = useColorModeValue("#2563EB", "#1E3A8A");
  const textColor = "white";
  const buttonBg = useColorModeValue("white", "whiteAlpha.200");
  const buttonColor = useColorModeValue("#1E40AF", "white");
  const NavigationHeaderBg = useColorModeValue("whiteAlpha.400", "whiteAlpha.400");


  return (
    <>
      <Container
        maxW="100%"
        width="100%"
        bg={headerBg}
        px={[2, 4]}
        position="fixed"
        zIndex={1000}
      >
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          color={textColor}
        >

          <Text fontWeight="bold" fontSize={["24", "28", "32", "40"]}>
            <Link to="/SiriusAdminAdd">Sirius-CRM</Link>
          </Text>

          <Flex align="center" gap={2}>
            <IconButton
              aria-label="menu"
              display={{ base: "flex", md: "none" }}
              icon={<IoMenu size={24} />}
              onClick={onOpen}
              bg="transparent"
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
            />

            <Button
              onClick={toggleColorMode}
              bg={buttonBg}
              color={buttonColor}
              _hover={{ bg: useColorModeValue("gray.100", "whiteAlpha.300") }}
            >
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>
          </Flex>
        </Flex>
      </Container>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={drawerBg}>
          <DrawerHeader color="white" bg={NavigationHeaderBg} >Navigation</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={6} color="white">
              <Link to="/SiriusAdminAdd" onClick={onClose}>
                Add Agents
              </Link>
              <Link to="/SiriusAdminDelete" onClick={onClose}>
                Delete Agents
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
