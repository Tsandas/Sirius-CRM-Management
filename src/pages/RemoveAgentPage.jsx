import {
  Flex,
  Box,
  Input,
  Button,
  VStack,
  FormLabel,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import servers from "../servers/serverList.json";

const DeleteAgentPage = () => {
  const toast = useToast();
  const [serverUrl, setServerUrl] = useState("");
  const [agentId, setAgentId] = useState("");

  const handleSubmit = async () => {
    if (!serverUrl) {
      toast({
        description: "Please select a server",
        status: "error",
        duration: 3000,
      });
      return;
    }
    if (!agentId) {
      toast({
        description: "Please enter an Agent ID",
        status: "error",
        duration: 3000,
      });
      return;
    }

    let fullUrl = serverUrl;
    if (!/^https?:\/\//i.test(serverUrl)) {
      fullUrl = "https://" + serverUrl;
    }
    const serverPath = `${fullUrl.replace(/\/$/, "")}/api/sysadmin/delete`;

    try {
      await axios.delete(serverPath, { data: { agentId } });
      toast({
        description: "Agent deleted successfully",
        status: "success",
        duration: 3000,
      });
      setAgentId("");
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
          <FormLabel>Server</FormLabel>
          <Select
            placeholder="Select a server"
            value={serverUrl}
            onChange={(e) => setServerUrl(e.target.value)}
          >
            {servers.map((server) => (
              <option key={server.url} value={server.url}>
                {server.name}
              </option>
            ))}
          </Select>
        </Box>

        <Box>
          <FormLabel>Agent ID</FormLabel>
          <Input
            name="agentId"
            value={agentId}
            onChange={(e) => setAgentId(e.target.value)}
          />
        </Box>

        <Button colorScheme="red" onClick={handleSubmit}>
          Delete Agent
        </Button>
      </VStack>
    </Flex>
  );
};

export default DeleteAgentPage;
