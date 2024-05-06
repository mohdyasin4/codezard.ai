// ModelSelect.jsx
import React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "./ui/select";
import { ApiKeyInput } from "./apikey-input";
import { modelOptions } from "@/app/generate-code/options";
import { Label } from "./ui/label";
import { Icon } from "@iconify/react";

interface ModelSelectProps {
  selectedModel: string;
  apiKey: string;
  handleModelChange: (model: string) => void;
  handleApiKeyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModelSelect = ({ selectedModel, apiKey, handleModelChange, handleApiKeyChange }:ModelSelectProps) => (
  <div>
    <div className="col-span-3 flex items-center gap-2">
      <div className="w-52">
        <Select onValueChange={handleModelChange}>
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
                  <div
                    className="flex flex-row items-center gap-2"
                    onClick={() => handleModelChange(model.value)}
                  >
                    {/* Assuming you have an Icon component */}
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
);

export default ModelSelect;
