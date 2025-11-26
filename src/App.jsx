import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/AddAgentPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RemoveAgentPage from "./pages/RemoveAgentPage";
import AddAgentPage from "./pages/AddAgentPage";

function App() {
  return (
    <Box minH="100vh">
      <Header />
      <Box display="flex">
        <Box flex="1" mt="16" ml={{ base: 0, md: "250px" }} p={4}>
          <Routes>
            <Route path="/SiriusAdminAdd" element={<AddAgentPage />} />
            <Route path="/SiriusAdminDelete" element={<RemoveAgentPage />} />
          </Routes>
        </Box>
        <Sidebar />
      </Box>
    </Box>
  );
}
export default App;
