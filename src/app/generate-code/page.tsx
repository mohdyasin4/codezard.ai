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

export default function GenerateCodePage() {
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
