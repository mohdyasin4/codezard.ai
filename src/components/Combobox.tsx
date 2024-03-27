"use client"

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Icon } from '@iconify/react'; // Import Icon component

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FrameworkOption {
  value: string;
  label: string;
  icon: string; // Icon path for each framework
}

export interface ComboboxProps {
  placeholder: string;
  options: FrameworkOption[]; // Pass options as props
  onSelect: (value: string) => void;
  selectedLanguage: string; // Pass selected language as props
}

export function ComboboxDemo({ placeholder, options, onSelect, selectedLanguage }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    setValue(""); // Deselect the option when language changes
  }, [selectedLanguage]);

  const handleSelect = (currentValue: string) => {
    setValue(currentValue);
    setOpen(false);
    onSelect(currentValue);
  };
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full col-span-3 transition-colors duration-500"
        >
          {value ? (
            <>
              <Icon
                icon={options.find((framework) => framework.value === value)?.icon ?? ""}
                width="1.2rem"
                height="1.2rem"
                style={{ marginRight: '0.5rem' }}
              />
              {options.find((framework) => framework.value === value)?.label}
            </>
          ) : (
            placeholder // Display placeholder when no framework is selected
            )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[650px] mt-2 p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {options.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={() => handleSelect(framework.value)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                <Icon
                  icon={framework.icon}
                  width="1.2rem"
                  height="1.2rem"
                  style={{ marginRight: '0.5rem' }}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}