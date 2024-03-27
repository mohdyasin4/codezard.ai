// generate-code/page.tsx

"use client";
import React from "react";
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


export default function GenerateCodePage() {
  const premadeTemplates = [
    { icon: <Squircle radius="14" stroke="none" fill="#7AFF11" size={12} />, text: "Login Form", href: "/project1" },
    { icon: <Squircle stroke="none" fill="#8E55EA" size={12} />, text: "Signup Form", href: "/project2" },
    { icon: <Squircle stroke="none" fill="#3E90F0" size={12} />, text: "To-Do List App", href: "/project3" },
    { icon: <Squircle stroke="none" fill="#D84C10" size={12} />, text: "TicTacToe Game", href: "/project3" },
  ];

  return (
    <div className="h-screen flex flex-row">
      <div className="flex flex-col w-full relative">
        <Editor />
      </div>
    </div>
  );
}
