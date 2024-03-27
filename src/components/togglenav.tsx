import React from "react";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ToggleNavProps {
    isCollapsed: boolean;
    links: {
      title: string;
      label?: string;
      icon: React.ComponentType<any>;
      href: string; // Add href property for the link
    }[];
}

export function ToggleGroupDemo({links, isCollapsed}: ToggleNavProps) {
  return (
    <>
      <ToggleGroup type="single" className="flex flex-col gap-2 py-2">
      {links.map((link, index) => (
            <Link href={link.href} key={index}>
              
              {/* Wrap ToggleGroupItem with Link */}
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <ToggleGroupItem value={link.title}>
                    <link.icon className="h-4 w-4" />
                    <TooltipContent
                      side="right"
                      className="flex items-center gap-4"
                    >
                        <span className="ml-auto text-foreground">
                          {link.title}
                          {link.label}
                        </span>
                      
                    </TooltipContent>
                  </ToggleGroupItem>
                </TooltipTrigger>
              </Tooltip>
            </Link>
          ))}
      </ToggleGroup>
    </>
  );
}
