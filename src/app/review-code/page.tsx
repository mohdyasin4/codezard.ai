"use client";

import {
  CornerDownLeft,
  Mic,
  Paperclip,
  Settings,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import React, { useEffect, useState } from 'react';
import { generateReviewOpenAI } from "../api/openai/api";
import { generateReviewGemini } from "../api/gemini/api";
import Overlay from "@/components/Loading";
import { Separator } from "@/components/ui/separator";

interface ReviewCodePageProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ReviewCodePage() {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(""); // State to store the code
  const [output, setOutput] = useState(""); // State to store the output

  
  // Function to handle the review code action
  const handleReviewCode = async () => {
    // Retrieve the selected model from the localstorag
    const selectedModel = localStorage.getItem("selectedModel");
    // Retrieve the code from the code-holder textarea
    const codeInput = document.getElementById("codeholder") as HTMLInputElement | null;
    const code = codeInput?.value;
    
    // Check if code is empty
    if (!code || !code.trim()) {
      alert("Please enter some code for review.");
      return;
    }

    try {
      // Perform code review based on the selected model
      // For example, if selectedModel is "gpt":
      let response;
      if (selectedModel === "gpt") {
        response = await generateReviewOpenAI(code, setLoading);
      } else if (selectedModel === "gemini") {
        response = await generateReviewGemini(code, setLoading, localStorage.getItem("gemini-api-key") || "");
      } else {
        console.error("Invalid model selected");
        return;
      }

      console.log("Review Code Response:", response);
      console.log("Model Selected:", selectedModel);
      // Handle the response
      setOutput(response); // Assuming response is a string, you can modify this based on the actual response format

    } catch (error) {
      console.error("Error reviewing code:", error);
      // Handle error
    }
  };

  useEffect(() => {
    let lscode = localStorage.getItem("code");
    let reviewOutput = localStorage.getItem("reviewOutput");
    setCode(lscode);
    setOutput(reviewOutput);
  }, []);

  return (
    <TooltipProvider >
      
    {loading && (
      <Overlay text={"Analyzing your code..."} />)}
    <div className="grid h-[94vh] w-full ">
      <div className="flex flex-col h-full">
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Code Review</h1>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Settings className="size-4" />
                <span className="sr-only">Settings</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="min-h-full">
              <DrawerHeader>
                <DrawerTitle>Configuration</DrawerTitle>
                <DrawerDescription>
                  Configure the settings for the model and messages.
                </DrawerDescription>
              </DrawerHeader>
              <form className="grid w-full h-full items-start gap-6 overflow-auto p-4 pt-0">
                
                <fieldset className="grid gap-6 h-full rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Code for Review
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="system">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="assistant">Assistant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3 h-full">
                    <Label htmlFor="content">Content</Label>
                    <Textarea id="content" placeholder="You are a..." />
                  </div>
                </fieldset>
              </form>
            </DrawerContent>
          </Drawer>
          
          <Button
           variant="outline"
           size="sm"
           id="review-code"
           onClick={handleReviewCode}
           className="ml-auto gap-1.5 text-sm"
           >Review Code</Button>
        </header>
        <main className="grid flex-1 gap-4 h-full overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="relative hidden flex-col items-start gap-2 md:flex min-h-full" x-chunk="dashboard-03-chunk-0"
          >
            <form className="grid w-full h-full items-start gap-6">
              
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Code for Review
                </legend>
                <div className="grid gap-3">
                  {/* <Label htmlFor="content">Content</Label> */}
                  <Textarea
                    id="codeholder"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="You are a..."
                    className="min-h-[79vh]"
                  />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <div className="flex flex-col">
              
            <Badge variant="outline" className="absolute left-3 top-3 mb-4">
              Review Output
            </Badge>
            <Separator className="mt-8"/>

            </div>
            <div id="outputdilaog" className="max-h-[600px] p-4 overflow-auto" dangerouslySetInnerHTML={{ __html: output }}></div>
            <div className="flex-1" />
            <form
              className="relative overflow-hidden h-32 rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
            >
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your prompt here..."
                className=" resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Paperclip className="size-4" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Attach File</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Mic className="size-4" />
                      <span className="sr-only">Use Microphone</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Use Microphone</TooltipContent>
                </Tooltip>
                <Button type="submit" size="sm" className="ml-auto gap-1.5">
                  Send Prompt
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
    </TooltipProvider>
  );
}
