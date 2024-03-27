'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { DialogFooter } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "./ui/select";
import { ApiKeyInput } from "./apikey-input";

const CodeGenSettingsDialog = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Html");
  const [customPrompt, setCustomPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState(""); 
  const [apiKey, setApiKey] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const router = useRouter();

  const handleLanguageChange = (language: React.SetStateAction<string>) => {
    setSelectedLanguage(language);
  };
  
  const handleCustomPromptChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setCustomPrompt(value);
  };
  
  const handleModelChange = (model: React.SetStateAction<string>) => {
    setSelectedModel(model);
  };
  
  const handleApiKeyChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setApiKey(value);
  };

  const handleGenerateCode = () => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
    localStorage.setItem("customPrompt", customPrompt);
    localStorage.setItem("selectedModel", selectedModel);
    localStorage.setItem("apiKey", apiKey);

    router.push("/generate-code");
  };
  
  useEffect(() => setAllFieldsFilled(selectedLanguage && customPrompt && selectedModel && apiKey), [selectedLanguage, customPrompt, selectedModel, apiKey]);
  
  const languageOptions = [
    { name: "Html", icon: "vscode-icons:file-type-html" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "Python", icon: "logos:python" },
    { name: "Java", icon: "devicon-plain:java" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "C#", icon: "devicon:csharp" },
  ];

  const modelOptions = [
    { name: "GPT-3.5 Turbo", value: "gpt", icon: "simple-icons:openai" },
    { name: "Google Gemini Pro", value: "gemini", icon: "simple-icons:googlegemini" },
  ];

  return (
    <>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 gap-4">
          <Label htmlFor="language" className="text-right">
            Programming Language:
          </Label>
          <div className="grid grid-cols-3 col-span-3 gap-3">
            {languageOptions.map((language) => (
              <Button
                key={language.name}
                variant={selectedLanguage === language.name ? "secondary" : "outline"}
                onClick={() => handleLanguageChange(language.name)}
                className="transition-colors duration-500"
              >
                <Icon icon={language.icon} width="1.2rem" height="1.2rem" style={{ marginRight: "0.5rem" }} /> {language.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 items-center">
          <Label htmlFor="model" className="text-right">
            AI Model:
          </Label>
          <div className="col-span-3 flex items-center gap-2">
            <div className="w-52">
              <Select onValueChange={handleModelChange} defaultValue="">
                <SelectTrigger>
                  <SelectValue placeholder="Select Model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {modelOptions.map((model) => (
                      <SelectItem
                        key={model.value}
                        value={model.value}
                        className={selectedModel === model.value ? "selected" : ""}
                      >
                        <div className="flex flex-row items-center gap-2" onClick={() => handleModelChange(model.value)}>
                          <Icon
                            icon={model.icon}
                            width="1.2rem"
                            height="1.2rem"
                          />
                          <span>{model.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-grow">
              <ApiKeyInput
                className="w-full"
                id="apiKey"
                placeholder="Enter API Key"
                value={apiKey}
                onChange={handleApiKeyChange}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 items-start gap-4">
          <Label htmlFor="customPrompt" className="text-right">
            Custom Prompt
          </Label>
          <div className="col-span-3">
            <div className="grid w-full gap-1.5">
              <Textarea
                placeholder="Type your custom prompt here."
                id="customPrompt"
                value={customPrompt}
                onChange={handleCustomPromptChange}
              />
              <p className="text-sm text-muted-foreground">
                Specify your needs and requirements here. This information will
                be considered during code generation.
                <br />
                Don't have any idea? No worries, Check out{" "}
                <Button asChild variant="link" className="m-0 p-0">
                  <Link href="/library">Templates Library</Link>
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button
          type="submit"
          disabled={!allFieldsFilled}
          onClick={handleGenerateCode}
        >
          Generate Code
        </Button>
      </DialogFooter>
    </>
  );
};

export default CodeGenSettingsDialog;
