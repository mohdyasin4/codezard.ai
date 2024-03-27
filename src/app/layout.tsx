"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar, { SidebarItem } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/Theme-provider";
import { Code2, Languages, SearchCode, Squircle, Sparkles, Bot, FileText, Settings, } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const premadeTemplates = [
    {
      icon: <Squircle radius="14" stroke="none" fill="#7AFF11" size={12} />,
      text: "Login Form",
      href: "/project1",
    },
    {
      icon: <Squircle stroke="none" fill="#8E55EA" size={12} />,
      text: "Signup Form",
      href: "/project2",
    },
    {
      icon: <Squircle stroke="none" fill="#3E90F0" size={12} />,
      text: "To-Do List App",
      href: "/project3",
    },
    {
      icon: <Squircle stroke="none" fill="#D84C10" size={12} />,
      text: "TicTacToe Game",
      href: "/project3",
    },
  ];

  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const variants = {
    hidden: { opacity: 0, y: 0, scale: 0.8 },
    enter: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="h-screen flex">
            {!isHomepage && (
              <Sidebar
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
                  <SidebarItem
                    key="ai-model-setting"
                    icon={<Bot size={18} />}
                    text="AI Model Setting"
                    href="/help"
                    alert={false}
                  />,
                  <SidebarItem
                    key="documentation"
                    icon={<FileText size={18} />}
                    text="Documentation"
                    href="/documentation"
                    alert={false}
                  />,
                  <SidebarItem
                    key="settings"
                    icon={<Settings size={18} />}
                    text="Settings"
                    href="/settings"
                    alert={false}
                  />,
                ]}
              />
            )}
            <motion.div
              className="flex flex-col w-full relative ml-[-0.5rem] z-auto"
              variants={variants}
              initial="hidden"
              animate="enter"
              transition={{ type: "linear" }}
            >
              {children}
            </motion.div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
