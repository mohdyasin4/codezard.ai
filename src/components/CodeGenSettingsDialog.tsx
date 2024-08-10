"use client";

import React, { useState, useEffect, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { DialogFooter } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "./ui/select";
import { ApiKeyInput } from "./apikey-input";
import { languageOptions, templateOptions, modelOptions } from "@/app/generate-code/options";
import { AlertCircle, Check, Code2, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { generateCodeOpenAI } from "@/app/api/openai/api";
import { generateCodeGemini } from "@/app/api/gemini/api";
import { premadeTemplates } from "@/app/generate-code/page";
import { GeneratedCodeContext, useGeneratedCode } from "@/app/GeneratedCodeContext";
import ModelSelect from "./ModelSelect"; // Import the ModelSelect component
import ReviewDialog from "./ReviewDialog";

interface CodeGenSettingsDialogProps {
  selectedModel: string;
  apiKey: string;
  setSelectedModel: (model: string) => void;
  setApiKey: (apiKey: string) => void;
  handleModelChange: (model: string) => void;
  handleApiKeyChange: (event: { target: { value: any } }) => void;
}
const CodeGenSettingsDialog = ({ selectedModel, apiKey, setSelectedModel, setApiKey, handleApiKeyChange, handleModelChange }: CodeGenSettingsDialogProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState("Html");
  const [selectedTemplate, setSelectedTemplate] = useState(""); // Add this line
  const [customPrompt, setCustomPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const { setGeneratedCode } = useGeneratedCode(); // Check context usage
  const { setLanguage } = useContext(GeneratedCodeContext); // Check context usage
  const isNotReviewPage = usePathname() !== "/review-code"; // Check if the current page is not the review page
  const router = useRouter();

  const handleLanguageChange = (language: React.SetStateAction<string>) => {
    setSelectedLanguage(language);
  };

  const handleCustomPromptChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setCustomPrompt(value);
  };

  // const handleModelChange = (model: React.SetStateAction<string>) => {
  //   setSelectedModel(model);
  // };

  const handleTemplateChange = (template: React.SetStateAction<string>) => {
    setSelectedTemplate(template);
    if (template !== "Custom Prompt") {
      // Reset custom prompt when template changes
      setCustomPrompt("");
    }
  };

  // const handleApiKeyChange = (event: { target: { value: any } }) => {
  //   const value = event.target.value;
  //   setApiKey(value);
  // };

  const handleGenerateCode = async () => {
    setLoading(true);

    // Store selected language, template, custom prompt, and model in localStorage
    localStorage.setItem("selectedLanguage", selectedLanguage);
    localStorage.setItem("selectedTemplate", selectedTemplate);
    localStorage.setItem("customPrompt", customPrompt);
    localStorage.setItem("selectedModel", selectedModel);

    // Find the selected template by name and retrieve its ID
    let templateOptionsForLanguage = templateOptions[selectedLanguage];
    if (!templateOptionsForLanguage) {
      setLoading(false);
      console.error("No templates available for the selected language.");
      return;
    }

    const selectedTemplateObj = templateOptionsForLanguage.find(
      (template) => template.name === selectedTemplate
    );

    if (!selectedTemplateObj) {
      setLoading(false);
      console.error("Selected template not found.");
      return;
    }

    // Conditionally store the API key based on the selected model
    if (selectedModel === "gpt") {
      localStorage.setItem("gpt-apiKey", apiKey);
    } else if (selectedModel === "gemini") {
      localStorage.setItem("gemini-apiKey", apiKey);
    }

    let response;
    let code;
    let language;
    let id = selectedTemplateObj.id.toString();

    try {
      if (selectedTemplate === "Custom Prompt") {
        // Generate code for custom prompt based on the selected model
        if (selectedModel === "gpt") {
          response = await generateCodeOpenAI(customPrompt, setLoading);
          if (response) {
            language = response.language;
            code = response.code;
          }
        } else if (selectedModel === "gemini") {
          response = await generateCodeGemini(customPrompt, setLoading, apiKey);
          if (response) {
            language = response.language;
            code = response.code;
          }
        }
      } else {
        // Generate code using selected template prompt
        const prompt = selectedTemplateObj.prompt; // Use the prompt directly from the selected template
        // Call the appropriate generateCode function based on the selected model
        if (selectedModel === "gpt") {
          response = await generateCodeOpenAI(prompt ?? "", setLoading);
          if (response) {
            language = response.language;
            code = response.code;
          }
        } else if (selectedModel === "gemini") {
          response = await generateCodeGemini(prompt ?? "", setLoading, apiKey);
          if (response) {
            language = response.language;
            code = response.code;
          }
        }
      }
      console.log("After generating code:", code, language);

      // Call the onCodeGenerated function with the generated code
      setGeneratedCode(code);
      setLanguage(language);
      // Redirect to generate-code with the selected template id as a query parameter
      const url = `/generate-code?id=${id}`;
      // Use the constructed URL to navigate
      router.push(url);
    } catch (error) {
      console.error("Error generating code:", error);
      setLoading(false); // Reset loading state on error
      // Handle error gracefully, e.g., show error message to the user
    }
  };


  useEffect(() => {
    // Check if all fields are filled
    setAllFieldsFilled(
      selectedLanguage &&
      selectedTemplate &&
      apiKey &&
      selectedModel &&
      (selectedTemplate !== "Custom Prompt" || customPrompt)
    );
  }, [selectedLanguage, selectedTemplate, customPrompt, selectedModel, apiKey]);

  return (
    <div className="flex h-full flex-col">
      <Label className="text-2xl mb-2 flex-row flex items-center"><Code2 className="mr-2" />Code Generation</Label>
      {!selectedModel || !apiKey ? (
        <div className="flex flex-col w-full py-6 items-end justify-center">
          <Alert variant={"default"} className="w-full relative">
            <AlertCircle className="h-8 w-8" />
            <AlertTitle className="font-bold text-white ml-4">
              Missing API Key
            </AlertTitle>
            <AlertDescription className="font-medium ml-4 text-white">
              Please select an AI Model and enter your API Key to proceed.
            </AlertDescription>
            <div className="absolute inset-0 rounded-lg border-2 shadow-md shadow-slate-100 border-transparent ring-2 ring-slate-100 animate-pulse"></div>
          </Alert>
        </div>
      ) : null}
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 gap-4">
          <Label htmlFor="language" className="text-right">
            Programming Language
          </Label>
          <div className="grid grid-cols-3 col-span-3 gap-3">
            {languageOptions.map((language) => (
              <div key={language.name} className="relative">
                <Button
                  variant={
                    selectedLanguage === language.name ? "secondary" : "outline"
                  }
                  onClick={() => handleLanguageChange(language.name)}
                  className="transition-colors duration-500 w-52"
                >
                  <Icon
                    icon={language.icon}
                    width="1.2rem"
                    height="1.2rem"
                    style={{ marginRight: "0.5rem" }}
                  />
                  {language.name}
                  {selectedLanguage === language.name && (
                    <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
                      <Check size={14} className="text-primary" />
                    </div>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Label htmlFor="template" className="text-right">
            Templates
          </Label>
          <div className="grid grid-cols-3 col-span-3 gap-3">
            {templateOptions[selectedLanguage] ? (
              templateOptions[selectedLanguage].map((template) => (
                <div key={template.id} className="relative">
                  <Button
                    variant={
                      selectedTemplate === template.name ? "secondary" : "outline"
                    }
                    onClick={() => handleTemplateChange(template.name)}
                    className="transition-colors duration-500 w-52"
                  >
                    {template.name}

                    {selectedTemplate === template.name && (
                      <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
                        <Check size={14} className="text-primary" />
                      </div>
                    )}
                  </Button>
                </div>
              ))
            ) : (
              <div>No templates available for the selected language</div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 items-center">
          <Label htmlFor="model" className="text-right">
            AI Model
          </Label>
          <div className="col-span-3">

            <ModelSelect
              selectedModel={selectedModel}
              apiKey={apiKey}
              handleModelChange={handleModelChange}
              handleApiKeyChange={handleApiKeyChange}
            />
          </div>
        </div>
        {selectedTemplate === "Custom Prompt" && (
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
              </div>
            </div>
          </div>
        )}
      </div>
      <DialogFooter>
        <Button
          type="submit"
          disabled={!allFieldsFilled || loading} // Disable button when loading
          onClick={handleGenerateCode}
        >
          {loading ? ( // Render spinner and text conditionally based on loading state
            <>
              <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>Generate Code</>
          )}
        </Button>
      </DialogFooter>
      {!isNotReviewPage && (
        <ReviewDialog
          selectedModel={selectedModel}
          apiKey={apiKey}
          handleModelChange={handleModelChange}
          handleApiKeyChange={handleApiKeyChange}
        />
      )}
    </div>
  );
};

export default CodeGenSettingsDialog;
