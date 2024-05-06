import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import ModelSelect from "./ModelSelect";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { DialogFooter, DialogHeader } from "./ui/dialog";
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
import { AlertCircle, Check, Loader2, SearchCode } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { generateCodeOpenAI, generateReviewOpenAI } from "@/app/api/openai/api";
import { generateCodeGemini, generateReviewGemini } from "@/app/api/gemini/api";
import { premadeTemplates } from "@/app/generate-code/page";
import { GeneratedCodeContext, useGeneratedCode } from "@/app/GeneratedCodeContext";
import { Input } from "./ui/input";
import { set } from "date-fns";

interface ReviewDialogProps {
  selectedModel: string;
  apiKey: string;
  setSelectedModel: (model: string) => void;
  setApiKey: (apiKey: string) => void;
  handleModelChange: (model: string) => void;
  handleApiKeyChange: (event: { target: { value: any } }) => void;
}

const ReviewDialog = ({selectedModel,apiKey,setSelectedModel, setApiKey, handleModelChange, handleApiKeyChange}:ReviewDialogProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [code, setCode] = useState("");

  const handleReviewCode = async () => {
    // Check if all fields are filled
    if (!selectedModel || !apiKey || !code.trim()) {
      alert("Please select a model, provide an API key, and enter some code for review.");
      return;
    }

    try {
      let response;
      if (selectedModel === "gpt") {
        response = await generateReviewOpenAI(code,setLoading);
      } else if (selectedModel === "gemini") {
        response = await generateReviewGemini(code,setLoading);
      } else {
        console.error("Invalid model selected");
        return;
      }
      localStorage.setItem("code", code);
      localStorage.setItem("reviewOutput", response);
      router.push("/review-code");
    } catch (error) {
      console.error("Error reviewing code:", error);
      // Handle error
    }
  };
  
  useEffect(() => {
    // Check if all fields are filled
    setAllFieldsFilled(selectedModel && apiKey);
  }, [selectedModel, apiKey]);

  return (
    <div className="flex h-full flex-col">
      {/* Code Review Note */}
      <Label className="text-2xl mb-2 flex-row flex items-center">
        <SearchCode className="mr-2" />
        Code Review
      </Label>
      {/* Missing API Key Alert */}
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

      <Label className="text-xs font-extrabold text-red-500">NOTE:</Label>
      <p className="text-sm text-white opacity-55">
        Please follow the instructions below to ensure a thorough code review:
      </p>
      <ol className="list-decimal pl-5 pb-3">
        <li className="text-sm text-white opacity-55">
          Copy and paste the code you want to review into the text area below.
        </li>
        <li className="text-sm text-white opacity-55">
          Ensure the code is properly formatted and readable.
        </li>
        <li className="text-sm text-white opacity-55">
          Click the "Review Code" button to initiate the review process.
        </li>
      </ol>

      {/* Code Textarea */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="code" className="text-left">
          Code for Review
        </Label>
        <Textarea id="code-area" placeholder="Paste your code here..." value={code} className="h-[150px]" onChange={(e) => setCode(e.target.value)} />
      </div>

      {/* AI Model Select */}
      <div className="flex flex-col">
        <Label htmlFor="model" className="text-left my-4">
          AI Model
        </Label>
        <ModelSelect
          selectedModel={selectedModel}
          apiKey={apiKey}
          handleModelChange={handleModelChange}
          handleApiKeyChange={handleApiKeyChange}
        />

      </div>

     {/* Review Code Button */}
     <div className="mt-4">
        <Button
          type="submit"
          className="w-full"
          disabled={!allFieldsFilled || loading} // Disable button when loading
          onClick={handleReviewCode}
        >
          {loading ? ( // Render spinner and text conditionally based on loading state
            <>
              <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              <span>Analyzing Your Code...</span>
            </>
          ) : (
            <>Review Code</>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ReviewDialog;
