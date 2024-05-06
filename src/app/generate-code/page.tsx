// generate-code/page.tsx
'use client'
import React, { useState, useContext, useEffect } from "react";
import Editor from "@/components/Editor";
import Sidebar from "@/components/Sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarItem } from "@/components/Sidebar";
import {
  Code2,
  Home,
  Compass,
  Users2,
  MessagesSquare,
  LifeBuoy,
  FileText,
  Settings,
  SearchCode,
  Languages,
  Sparkles,
  Square,
  SquareAsterisk,
  SquareIcon,
  Squircle,
  Bot,
  Key
} from "lucide-react";
import { ThemeProvider } from "@/components/Theme-provider";
import ModelSettingsDialog from "@/components/ModelSettings";
import SettingsDialog from "@/components/SettingsDialog";
import Overlay from "@/components/Loading";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import { GeneratedCodeContext} from "../GeneratedCodeContext";
export const premadeTemplates = [
  {
    id: 1,
    icon: <Squircle radius="14" stroke="none" fill="#7AFF11" size={12} />,
    text: "Login Form",
    prompt:
      "Use TailwindCss Provide a Professional login form html code with modern design Utilize a CSS library like Tailwind CSS to ensure responsiveness and consistent styling.include css library cdn make sure css and js code is inline and explain the code as well",
  },
  {
    id: 2,
    icon: <Squircle stroke="none" fill="#8E55EA" size={12} />,
    text: "Signup Form",
    prompt:
      "Develop an intuitive signup form incorporating validation and error handling. Utilize a CSS framework such as Tailwind CSS for enhanced form styling and functionality. make sure css and js codde is inline",
  },
  {
    id: 3,
    icon: <Squircle stroke="none" fill="#3E90F0" size={12} />,
    text: "To-Do List App",
    prompt:
      "Build a responsive to-do list application in simple html inline css and javascript with features like adding, deleting, and updating tasks. Implement drag-and-drop functionality for task reordering using a library like React Beautiful DnD. make sure css and js codde is inline",
  },
  {
    id: 4,
    icon: <Squircle stroke="none" fill="#D84C10" size={12} />,
    text: "TicTacToe Game",
    prompt:
      "Develop a TicTacToe game with a sleek user interface and interactive gameplay. Utilize CSS animations for smooth transitions between game states and provide options for single-player and multiplayer modes.make sure css and js codde is inline",
  },
  {
    id: 5,
    icon: <Squircle stroke="none" fill="#CFFF04" size={12} />,
    text: "Calculator",
    prompt:
      "Create a functional calculator application in HTML inline CSS and javascript with support for basic arithmetic operations. Implement keyboard support for enhanced user experience ",
  },
];

export default function GenerateCodePage({ generatedCode, language}: { generatedCode: any, language:any}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isHomepage = pathname === "/";  
  // console.log("GenerateddCOde in GCPage: ", generatedCode);
/*  const handleTemplateChange = async (id: string, prompt: any) => {
    const text = premadeTemplates.find((project) => project.id.toString() === id)?.text;
    prompt = premadeTemplates.find((project) => project.id.toString() === id)?.prompt;
    localStorage.setItem("selectedTemplate", text || "");
    localStorage.setItem("selectedTemplateId", id);
    router.push(`/generate-code/?id=${id}`);
    const generatedCode = await generateCode(prompt, setLoading);
    generatedCode(generatedCode);
  }; */

  return (
    <div className="h-screen flex flex-row">
        <div className="flex flex-col w-full -ml-[0.5rem] relative">
        {/* Pass setEditorContent function to the Editor component */}
        {loading && <Overlay text={""} />}
        <Editor/>
      </div>
    </div>
  );
}
