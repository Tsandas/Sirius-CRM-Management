import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AddAgentPage from "./pages/AddAgentPage";
import RemoveAgentPage from "./pages/RemoveAgentPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={loading} />

      {!loading && (
        <Box minH="100vh">
          <Header />
          <Box display="flex">
            <Box flex="1" mt="16" ml={{ base: 0, md: "250px" }} p={4}>
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/SiriusAdminAdd" replace />}
                />
                <Route path="/SiriusAdminAdd" element={<AddAgentPage />} />
                <Route
                  path="/SiriusAdminDelete"
                  element={<RemoveAgentPage />}
                />
              </Routes>
            </Box>
            <Sidebar />
          </Box>
        </Box>
      )}
    </>
  );
}

export default App;
