import React, { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

const FrameworkCombobox = ({ frameworks, selectedFramework, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleFrameworkChange = (framework) => {
    onChange(framework);
    setOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="w-[200px] justify-between"
      >
        {selectedFramework ? selectedFramework : "Select framework..."}
        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
      {open && (
        <div className="absolute z-10 mt-1 w-[200px] bg-white border border-gray-200 rounded shadow-lg">
          {frameworks.map((framework) => (
            <button
              key={framework.value}
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => handleFrameworkChange(framework.label)}
            >
              {framework.label}
              {selectedFramework === framework.label && (
                <CheckIcon className="ml-auto h-4 w-4" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FrameworkCombobox;
