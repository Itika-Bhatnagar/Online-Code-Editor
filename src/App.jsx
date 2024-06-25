import { useState } from "react";
import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  const [theme, setTheme] = useState("vs-dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "vs-dark" ? "vs-light" : "vs-dark"));
  };

  return (
    <Box
      minH="100vh"
      bg={theme === "vs-dark" ? "#0f0a19" : "#e6e6fa"} // Light grayish purple
      color={theme === "vs-dark" ? "gray.500" : "black"} // Adjust text color for better visibility
      px={6}
      py={8}
    >
      <CodeEditor theme={theme} toggleTheme={toggleTheme} />
    </Box>
  );
}

export default App;
