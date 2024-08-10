"use client";

import { useContext, createContext, useState } from "react";
import styles from "../styles/Snav.module.scss";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { generateCodeOpenAI } from "@/app/api/openai/api";
import { generateCodeGemini } from "@/app/api/gemini/api";
import { GeneratedCodeContext, useGeneratedCode } from '@/app/GeneratedCodeContext';
import { premadeTemplates } from "@/app/generate-code/options";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Separator } from "./ui/separator";
import { ChevronDown, PartyPopper, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface SidebarProps {
  setLoading: (value: boolean) => void;
  upperItems: React.ReactNode[];
  lowerItems: React.ReactNode[];
  projects: {
    id: number;
    icon: React.ReactNode;
    text: string;
    prompt: string;
  }[];
}

export const SidebarContext = createContext<any>(null); // Export SidebarContext

export default function Sidebar({
  upperItems,
  lowerItems,
  setLoading,
  projects,
}: SidebarProps) {
  const [expanded, setExpanded] = useState(true); // Set initial expanded state based on prop
  const router = useRouter();
  const { setGeneratedCode } = useGeneratedCode();
  const { setLanguage } = useContext(GeneratedCodeContext);
  const searchParams = useSearchParams();
  const [visibleCards, setVisibleCards] = useState(true); // State to manage visible cards

  
  const handleTemplateChange = async (id: string, prompt: any) => {
    const selectedModel = localStorage.getItem("selectedModel"); 

    let response;
    let code;
    let language;
    if (selectedModel === "gemini") {
      response = await generateCodeGemini(prompt, setLoading, localStorage.getItem("gemini-apiKey"));
      if(response){
        code = response.code;
        language = response.language;
      }
    } else {
      response = await generateCodeOpenAI(prompt, setLoading);
      if(response){
        code = response.code;
        language = response.language;
      }
    }
    
    setGeneratedCode(code);
    setLanguage(language);
    
    const text = premadeTemplates.find(
      (project) => project.id.toString() === id
    )?.text;
    prompt = premadeTemplates.find(
      (project) => project.id.toString() === id
    )?.prompt;
    localStorage.setItem("selectedTemplate", text || "");
    localStorage.setItem("selectedTemplateId", id);
    router.push(`/generate-code/?id=${id}`);
  };

  const toggleSidebar = () => {
    setExpanded((prevState) => !prevState);
  };
  const selectedTemplateId = searchParams.get("id");

  const closeCard = () => {
    setVisibleCards(false);
  };
  
  const isGeneratePage = usePathname() === "/generate-code";

  return (
    <>
      <TooltipProvider>
        <aside className="h-[94vh] flex flex-col z-50">
          <nav className="h-screen py-2 flex flex-col justify-between bg-[hsl(var(--background))] border-r shadow-sm">
            <div>
              <SidebarContext.Provider value={{ expanded }}>
                <ul className="flex flex-col gap-1 p-3 pr-3">{upperItems}
                </ul>
              </SidebarContext.Provider>
              <Separator />
              <SidebarContext.Provider value={{ expanded }}>
                {isGeneratePage && (
                  <ul className="flex flex-col justify-center items-center gap-1 p-3 pr-3">
                  {projects.map((project, index) => (
                    <SidebarItem
                      key={index}
                      icon={project.icon}
                      text={project.text}
                      onClick={() =>
                        handleTemplateChange(project.id.toString(), project.prompt)
                      }
                      href={`/generate-code/?id=${project.id}`}
                      alert={
                        selectedTemplateId === project.id.toString()
                          ? true
                          : false
                      }
                    />
                  ))}
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                      <ChevronDown
                        size={29}
                        className="text-white px-2 py-1 rounded-lg hover:bg-[#1a1a1a] transition-all 0.3s cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="flex items-start ml-4 px-2 py-1"
                    >
                      <span>Show More</span>
                    </TooltipContent>
                  </Tooltip>
                </ul>
                )}
              </SidebarContext.Provider>
            </div>
            <div>
              <SidebarContext.Provider value={{ expanded }}>
                {visibleCards && expanded && (
                  <div
                    className={`mt-auto p-2 w-64 transition-opacity duration-500 ${
                      visibleCards ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Card>
                      <CardHeader className="placeholder:t-0 md:p-4 flex justify-between items-end">
                        <Button className="px-2 m-0 absolute" variant={"ghost"}>
                          <X size={18} onClick={closeCard} />
                          </Button>
                        <div>
                          <PartyPopper size={24} className="mb-4" />
                          <CardTitle>New Update!</CardTitle>
                          <CardDescription>
                            Choose Gemini as AI Model! Click 'Model Settings'
                            below.
                          </CardDescription>
                        </div>
                      </CardHeader>

                      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                        <Button size="sm" className="w-full">
                          Change Log
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                )}
                <ul className="flex flex-col gap-1 p-3 pr-3">{lowerItems}</ul>
              </SidebarContext.Provider>
            </div>
          </nav>
        </aside>
        <div className="h-[94vh] flex flex-col relative z-50 ml-2 items-center justify-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex flex-col h-[72px] absolute items-center p-1 justify-center">
                <div>
                  {expanded ? (
                    <div
                      onClick={toggleSidebar}
                      className={styles.shape1}
                    ></div>
                  ) : (
                    <div
                      onClick={toggleSidebar}
                      className={styles.shape2}
                    ></div>
                  )}
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="flex items-start">
              <span className="text-foreground">
                {expanded ? "Close" : "Open"} Sidebar
              </span>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </>
  );
}

export function SidebarItem({
  icon,
  text,
  alert,
  href,
  onClick, // 1. Add onClick prop
}: {
  icon: any;
  text: any;
  alert: any;
  href: string;
  onClick?: () => void; // 1. Define onClick prop type
}) {
  const { expanded } = useContext(SidebarContext);
  const router = useRouter();
  const userPath = usePathname();
  const isActive = userPath === href;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Call the onClick prop if it's provided
    if (onClick) {
      onClick();
    }
    // Prevent link navigation if onClick is provided
    if (onClick) {
      event.preventDefault();
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      {/* 2. Attach handleClick to a wrapper */}
      <Link href={href}>
        <div
          className={`
            relative flex justify-center items-center px-2 py-2 my-1
            font-medium rounded-md cursor-pointer text-sm 
            ${
              isActive
                ? "bg-[#5552FA] hover:bg-[#413fc7] text-white"
                : "hover:bg-[#1a1a1a] text-white "
            }
            ${
              alert
                ? "bg-[#1a1a1a] text-white"
                : "hover:bg-[#1a1a1a] text-white"
            }
            group
          `}
          style={{
            transition:
              "background-color 0.s ease-in-out, color 0.3s ease-in-out",
          }} // Add transition styles
        >
          {icon}
          <span
            className={`overflow-hidden text-nowrap transition-all ${
              expanded ? "w-48 ml-3" : "w-0"
            }`}
          >
            {text}
          </span>
          {expanded && alert && (
            <Check size={24} className="absolute right-0 pr-2" />
          )}

          {!expanded && (
            <div
              className={`
                absolute left-full rounded-md px-2 py-1 ml-6
                bg-[#222222] text-white border border-[#5b5b5b92] text-xs text-nowrap
                invisible opacity-100 -translate-x-3 transition-all ease-in-out 0.3s
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
              `}
            >
              {text}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
