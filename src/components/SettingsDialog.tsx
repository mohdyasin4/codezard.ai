// SettingsDialog.tsx
"use client";

import React, { useState, useContext } from "react";
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
import { Plus, PlusCircleIcon, Settings } from "lucide-react";
import { SidebarContext } from "./Sidebar";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import CodeGenSettingsDialog from "./CodeGenSettingsDialog";

const SettingsDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { expanded } = useContext(SidebarContext); // Access the expanded state from SidebarContext

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  // Retrieve data from localStorage
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "";
  const selectedTemplate = localStorage.getItem("selectedTemplate") || "";
  const customPrompt = localStorage.getItem("customPrompt") || "";
  const selectedModel = localStorage.getItem("selectedModel") || "";
  const apiKey = localStorage.getItem("apiKey") || "";

  return (
    <>
      <Dialog isOpen={isOpen} onClose={closeDialog}>
        {/* Conditionally render the button based on the expanded state */}
        <DialogTrigger>
          {expanded ? (
            <Button
              variant="default"
              onClick={openDialog}
              className="flex flex-row w-full items-center justify-start p-2"
            >
              <PlusCircleIcon className="mr-2" size={18} />
              Generate New Code
            </Button>
          ) : (
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <Button
                  variant="ghost"
                  onClick={openDialog}
                  className="flex flex-row items-center justify-start p-2"
                >
                  <Settings size={18} />
                </Button>
              </TooltipTrigger>

              <TooltipContent side="right" className="text-white flex items-start text-xs py-1 px-2">
                Settings {/* Tooltip content */}
              </TooltipContent>
            </Tooltip>
          )}
        </DialogTrigger>
        <DialogContent className=" max-w-4xl grid-2 gap-6 flex flex-col">
          <CodeGenSettingsDialog />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SettingsDialog;
