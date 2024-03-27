// page.tsx
"use client";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Services from "@/components/Services";
import {
  Code2,
  ChevronRight,
  SearchCode,
  Languages,
  Sparkles,
} from "lucide-react";
import CodeGenSettingsDialog from "@/components/CodeGenSettingsDialog";
import Navbar from "@/components/navbar/Navbar";
import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { motion } from "framer-motion";

export default function Home() {
  const servicesData = [
    {
      text: "Code Generation",
      icon: Code2,
      iconColor: "#8E55EA",
      iconSize: 34,
      backgroundColor: "rgba(114, 52, 213, 0.2)", // Example background color
      dialogContent: <CodeGenSettingsDialog />, // Pass your dialog content component
    },
    {
      text: "Code Review",
      icon: SearchCode,
      iconColor: "#FFA500",
      iconSize: 34,
      backgroundColor: "rgba(102, 66, 30, 0.7)", // Example background color
    },
    {
      text: "Code Translation",
      icon: Languages,
      iconColor: "#3E90F0",
      iconSize: 34,
      backgroundColor: "#0084ff3e", // Example background color
    },
    {
      text: "AI Wizard",
      icon: Sparkles,
      iconColor: "#1CFF4E",
      iconSize: 34,
      backgroundColor: "rgba(20, 192, 57, 0.198)", // Example background color
    },
    // Add more service objects as needed
  ];


  return (
    <>
      <div className="flex flex-col items-center justify-center h-[94vh] py-2">
        <div className={styles.text}>
          <h1 className={styles.heading}>
            Welcome to Codezard.ai - Your Ultimate Coding Assistant
          </h1>
          <p className={styles.subheading}>
            Select from our range of assistance types tailored to streamline
            your coding workflow. Whether you're generating code, reviewing
            projects, translating scripts, or seeking expert guidance,
            Codezard.ai has you covered
          </p>
        </div>
        <div className="grid grid-2 gap-4">
          <Services services={servicesData} />
        </div>
      </div>
    </>
  );
}
