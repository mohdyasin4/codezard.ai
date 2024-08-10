"use client";

import React, { useState, useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Bot, Settings } from "lucide-react";
import { SidebarContext } from "./Sidebar";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Icon } from "@iconify/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "./ui/select";
import { Label } from "./ui/label";
import { ApiKeyInput } from "./apikey-input";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle } from "lucide-react";

const ModelSettingsDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [apiKey, setApiKey] = useState("");
  const { expanded } = useContext(SidebarContext);
  const { toast } = useToast();

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const storedModel = localStorage.getItem("selectedModel");
    const storedApiKey = localStorage.getItem(`${storedModel}-apiKey`);
    if (storedModel) setSelectedModel(storedModel);
    if (storedApiKey) setApiKey(storedApiKey);
  }, []);
  
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  
  const handleModelChange = (model: React.SetStateAction<string>) => {
    setSelectedModel(model);
    // Retrieve the corresponding API key from localStorage
    const storedApiKey = localStorage.getItem(`${model}-apiKey`);
    if (storedApiKey) {
      setApiKey(storedApiKey);
    } else {
      setApiKey("");
    }
    // Save selected model to localStorage
    localStorage.setItem("selectedModel", model);
  };

  const handleApiKeyChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setApiKey(value);
    // Save API key to localStorage
    localStorage.setItem(`${selectedModel}-apiKey`, value);
  };

  const handleSave = () => {
    // Save selected model and API key to localStorage
    localStorage.setItem("selectedModel", selectedModel);
    // Close the dialog
    closeDialog();
    // Show toast notification
    toast({
      variant: "success",
      icon: "lucide-check-circle",
      description: "Your model settings have been updated.",
    });
  };

  const modelOptions = [
    // { name: "GPT-3.5 Turbo", value: "gpt", icon: "simple-icons:openai" },
    { name: "Google Gemini Pro", value: "gemini", icon: "simple-icons:googlegemini" },
  ];

  return (
    <>
      <Dialog isOpen={isOpen} onClose={closeDialog}>
        {/* Conditionally render the button based on the expanded state */}
        <DialogTrigger>
          {expanded ? (
            <Button
              variant="ghost"
              onClick={openDialog}
              className="flex flex-row w-full items-center justify-start p-2"
            >
              <Bot className="mr-3" size={18} />
              Model Settings
            </Button>
          ) : (
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <Button
                  variant="ghost"
                  onClick={openDialog}
                  className="flex flex-row items-center justify-start p-2"
                >
                  <Bot size={18} />
                </Button>
              </TooltipTrigger>

              <TooltipContent
                side="right"
                className="text-white flex items-start text-xs py-1 px-2"
              >
                Model Settings {/* Tooltip content */}
              </TooltipContent>
            </Tooltip>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Model Settings</DialogTitle>
            <DialogDescription>Configure your settings here.</DialogDescription>
          </DialogHeader>

          <div className="items-center">
            <div className="row-span-5 flex items-center gap-2">
              <div className="w-46">
                <Select onValueChange={handleModelChange}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        selectedModel ? (
                          <div className="flex flex-row items-center">
                            <Icon
                              icon={
                                modelOptions.find(
                                  (model) => model.value === selectedModel
                                )?.icon
                              }
                              width="1.2rem"
                              height="1.2rem"
                              className="mr-3"
                            />
                            {
                              modelOptions.find(
                                (model) => model.value === selectedModel
                              )?.name
                            }
                          </div>
                        ) : (
                          "Select Model"
                        )
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {modelOptions.map((model) => (
                        <SelectItem
                          key={model.value}
                          value={model.value}
                          className={
                            selectedModel === model.value ? "selected" : ""
                          }
                        >
                          <div
                            className="flex flex-row items-center gap-2"
                            onClick={() => handleModelChange(model.value)}
                          >
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
          <DialogFooter>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ModelSettingsDialog;
