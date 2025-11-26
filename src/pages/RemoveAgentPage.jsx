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

const RemoveAgentPage = () => {
  const toast = useToast();

  const [serverUrl, setServerUrl] = useState("");
  const [agentData, setAgentData] = useState({
    agentId: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAgentData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!serverUrl) {
      toast({
        description: "Please enter a server URL",
        status: "error",
        duration: 3000,
      });
      return;
    }

    try {
      await axios.delete(serverUrl, { data: agentData });
      toast({
        description: "Agent submitted successfully",
        status: "success",
        duration: 3000,
      });
      setAgentData({
        agentId: "",
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
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Flex>
  );
};

export default RemoveAgentPage;
