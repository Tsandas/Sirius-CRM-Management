import {
  Flex,
  Box,
  Input,
  Button,
  VStack,
  FormLabel,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const AddAgentPage = () => {
  const toast = useToast();

  const [serverUrl, setServerUrl] = useState("");
  const [agentData, setAgentData] = useState({
    agentId: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    role: "",
    active: true,
    lastLogin: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAgentData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    console.log(agentData);
    if (!serverUrl) {
      toast({
        description: "Please enter a server URL",
        status: "error",
        duration: 3000,
      });
      return;
    }

    try {
      await axios.post(serverUrl, agentData);
      toast({
        description: "Agent submitted successfully",
        status: "success",
        duration: 3000,
      });
      setAgentData({
        agentId: "",
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        role: "",
        active: true,
        lastLogin: "",
        createdAt: "",
        updatedAt: "",
      });
    } catch (err) {
      const errorMessage =
        err.response?.data?.error?.details || "Something went wrong";
      toast({ description: errorMessage, status: "error", duration: 3000 });
      console.error(err);
    }
  };

  return (
    <Flex direction="column" p={4}>
      <VStack spacing={4} align="stretch" maxW="600px">
        <Box>
          <FormLabel>Server URL</FormLabel>
          <Input
            placeholder="Enter server URL"
            value={serverUrl}
            onChange={(e) => setServerUrl(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel>Agent ID</FormLabel>
          <Input
            name="agentId"
            value={agentData.agentId}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>First Name</FormLabel>
          <Input
            name="firstName"
            value={agentData.firstName}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Last Name</FormLabel>
          <Input
            name="lastName"
            value={agentData.lastName}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Username</FormLabel>
          <Input
            name="username"
            value={agentData.username}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            value={agentData.password}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Role</FormLabel>
          <Input name="role" value={agentData.role} onChange={handleChange} />
        </Box>
        <Box>
          <Checkbox
            name="active"
            isChecked={agentData.active}
            onChange={handleChange}
          >
            Active
          </Checkbox>
        </Box>
        <Box>
          <FormLabel>Last Login</FormLabel>
          <Input
            name="lastLogin"
            type="datetime-local"
            value={agentData.lastLogin}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Created At</FormLabel>
          <Input
            name="createdAt"
            type="datetime-local"
            value={agentData.createdAt}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <FormLabel>Updated At</FormLabel>
          <Input
            name="updatedAt"
            type="datetime-local"
            value={agentData.updatedAt}
            onChange={handleChange}
          />
        </Box>

        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Flex>
  );
};

export default AddAgentPage;
