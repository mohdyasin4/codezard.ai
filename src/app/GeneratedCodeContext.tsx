// GeneratedCodeContext.tsx
import React, { createContext, useContext, useState } from "react";

interface GeneratedCodeContextType {
  code: string;
  language: string;
  setGeneratedCode: (code: string) => void;
  setLanguage: (language: string) => void;
}

export const GeneratedCodeContext = createContext<GeneratedCodeContextType>({
  code: "",
  language: "",
  setGeneratedCode: () => {},
  setLanguage: () => {},
});

export const useGeneratedCode = () => useContext(GeneratedCodeContext);

export const useGeneratedLanguage = () => {
  const { language, setLanguage } = useGeneratedCode();
  return { language, setLanguage };
};
interface GeneratedCodeProviderProps {
  children: React.ReactNode;
}

export const GeneratedCodeProvider: React.FC<GeneratedCodeProviderProps> = ({ children }) => {
  const [code, setGeneratedCode] = useState("");
  const [language, setLanguage] = useState("");

  return (
    <GeneratedCodeContext.Provider value={{ code, language, setGeneratedCode, setLanguage }}>
      {children}
    </GeneratedCodeContext.Provider>
  );
};
