import React from "react";
import {
  Container,
  Flex,
  Text,
  Button,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="100%"
      width="100%"
      bg="#1E40AF"
      px={4}
      position="fixed"
      zIndex={1000}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir="row"
      >
        <Text fontWeight="bold" fontSize="40">
          <Link to={"/SiriusAdminAdd"}>Sirius-CRM</Link>
        </Text>

        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
        </Button>
      </Flex>
    </Container>
  );
};

export default Header;
