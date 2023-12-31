import { Routes, Route, Navigate } from "react-router-dom";
import { Flex } from "@radix-ui/themes";
import Home from "./pages/home";
import Auth from "./pages/auth";

function App() {
  return (
    <Flex justify="center" className="w-full">
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </Flex>
  )
}

export default App
