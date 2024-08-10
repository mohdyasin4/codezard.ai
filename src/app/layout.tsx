"use client";

import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/Theme-provider";
import {
  Code2,
  Languages,
  SearchCode,
  Squircle,
  Sparkles,
  Bot,
  FileText,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import SettingsDialog from "@/components/SettingsDialog";
import ModelSettingsDialog from "@/components/ModelSettings";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import Overlay from "@/components/Loading";
import { generateCodeOpenAI } from "@/app/api/openai/api"; // Import the generateCode function
import { generateCodeGemini } from "./api/gemini/api";
import { GeneratedCodeContext, GeneratedCodeProvider, useGeneratedCode } from './GeneratedCodeContext';
import { premadeTemplates } from "./generate-code/options";
import GenerateCodePage from "./generate-code/page";
import Home from "./page";
import { languages } from "monaco-editor";
import { set } from "date-fns";
import { Separator } from "@/components/ui/separator";
import ReviewCodePage from "./review-code/page";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);
  const { code : generatedCode } = useGeneratedCode();
  const { setGeneratedCode } = useGeneratedCode();
  const { setLanguage } = useContext(GeneratedCodeContext);
  const [splashScreen, setSplashScreen] = useState(true);
  const isHomepage = usePathname() === "/"; // Check if the current page is the homepage
  const router = useRouter();

  const isReview = usePathname() === "/review-code"; // Check if the current page is the review code page
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSplashScreen(false);
    }, 3000); // Adjust the duration of the splash screen as needed

    return () => clearTimeout(timeout);
  }, []);

  // const handleTemplateChange = async (id: string, prompt: any) => {
  //   const selectedModel = localStorage.getItem("selectedModel"); // Get the selected model from localStorage
   
    // let response;
    // let code;
    // let language;
    // if (selectedModel === "gemini") {
    //   // Send request to Gemini API
    //   response = await generateCodeGemini(prompt, setLoading);
    //   if(response){
    //     code = response.code;
    //     language = response.language;
    //   }
    // } else {
    //   // Send request to OpenAI API
    //   response = await generateCodeOpenAI(prompt, setLoading);
    //   if(response){
    //     code = response.code;
    //     language = response.language;
    //   }
    // }
  
  //   // Update code and language in the context
  //   setGeneratedCode(code);
  //   setLanguage(language);
    
  //   const text = premadeTemplates.find(
  //     (project) => project.id.toString() === id
  //   )?.text;
  //   prompt = premadeTemplates.find(
  //     (project) => project.id.toString() === id
  //   )?.prompt;
  //   localStorage.setItem("selectedTemplate", text || "");
  //   localStorage.setItem("selectedTemplateId", id);
  //   router.push(`/generate-code/?id=${id}`);
  //   console.log("gcode:", code);
  //   console.log("lnguage:", language);
  // };
  
  
  return (
    <GeneratedCodeProvider>
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SplashScreen /> {/* Use the SplashScreen component here */}
            {!splashScreen && (
              <>
                <Navbar />
                <div className="h-screen flex flex-row p-0">
                  {!isHomepage && (
                    <Sidebar
                      setLoading={setLoading}
                      upperItems={[
                        <SidebarItem
                          key="code-generation"
                          icon={<Code2 size={18} />}
                          text="Code Generation"
                          href="/generate-code"
                          alert={false}
                        />,
                        <SidebarItem
                          key="code-review"
                          icon={<SearchCode size={18} />}
                          text="Code Review"
                          href="/review-code"
                          alert={false}
                        />,
                        <SidebarItem
                          key="code-translation"
                          icon={<Languages size={18} />}
                          text="Code Translation"
                          href="/translate-code"
                          alert={false}
                        />,
                        <SidebarItem
                          key="ai-wizard"
                          icon={<Sparkles size={18} />}
                          text="AI Wizard"
                          href="/ai-wizard"
                          alert={false}
                        />,
                      ]}
                      projects={premadeTemplates}
                      lowerItems={[
                        <ModelSettingsDialog key="model-settings" />, // Add the ModelSettingsDialog here
                        <SidebarItem
                          key="documentation"
                          icon={<FileText size={18} />}
                          text="Documentation"
                          href="/documentation"
                          alert={false}
                        />,
                      ]}
                    />
                  )}
                  <div className="flex flex-col w-full relative z-auto" >
                    {loading && <Overlay text="Generating Code..."/>}
                    {children}
                    <Analytics />
                    <Toaster />
                  </div>
                </div>
              </>
            )}
          </ThemeProvider>
      </body>
    </html>
    </GeneratedCodeProvider>
  );
}
