import { useRef, useState } from "react";
import { Box, HStack, Button, Flex } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = ({ theme, toggleTheme }) => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <Flex justifyContent="flex-end" p={4}>
        <Button
          onClick={toggleTheme}
          color={theme === "vs-dark" ? "black" : "white"}
          bg={theme === "vs-dark" ? "green.400" : "blackAlpha.900"}
          _hover={{
            bg: theme === "vs-dark" ? "green.300" : "blackAlpha.800",
          }}
        >
          {theme === "vs-dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </Flex>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} theme={theme} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme={theme}
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} theme={theme} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
