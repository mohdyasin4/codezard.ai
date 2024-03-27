// Sidebar.tsx

import { useContext, createContext, useState } from "react";
import styles from "../styles/Snav.module.scss";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { ChevronDown } from "lucide-react";

interface SidebarProps {
  upperItems: React.ReactNode[];
  lowerItems: React.ReactNode[];
  projects: { icon: React.ReactNode; text: string; href: string }[];
}

const SidebarContext = createContext<any>(null);

export default function Sidebar({
  upperItems,
  lowerItems,
  projects,
}: SidebarProps) {
  const [expanded, setExpanded] = useState(true); // Set initial expanded state based on prop
  const router = useRouter();

  const toggleSidebar = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <>
      <TooltipProvider>
        <aside className="h-[94vh] flex flex-col z-50">
          <nav className="h-screen flex flex-col justify-between bg-[hsl(var(--background))] border-r shadow-sm">
            <div>
              <SidebarContext.Provider value={{ expanded }}>
                <ul className="flex flex-col gap-1 p-4 pr-3">{upperItems}</ul>
              </SidebarContext.Provider>
              <Separator />
              <SidebarContext.Provider value={{ expanded }}>
                <ul className="flex flex-col justify-center items-center gap-1 p-4 pr-3">
                  {projects.map((project, index) => (
                    <SidebarItem
                      key={index}
                      icon={project.icon}
                      text={project.text}
                      href={project.href}
                      alert={false}
                    />
                  ))}
                  <ChevronDown
                    size={29}
                    className="text-white px-2 py-1 rounded-lg hover:bg-[#1a1a1a] transition-all 0.3s cursor-pointer"
                  />
                </ul>
              </SidebarContext.Provider>
            </div>
            <div>
              <SidebarContext.Provider value={{ expanded }}>
                <ul className="flex flex-col gap-1 p-4 pr-3">{lowerItems}</ul>
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
}: {
  icon: any;
  text: any;
  alert: any;
  href: string;
}) {
  const { expanded } = useContext(SidebarContext);
  const router = useRouter();
  const userPath = usePathname();
  const isActive = userPath === href;

  return (
    <Link href={href}>
      <li
        className={`
          relative flex justify-center items-center px-2 py-2 my-1
          font-medium rounded-md cursor-pointer text-sm 
          ${
            isActive
              ? "bg-[#5552FA] text-white"
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
          className={`overflow-hidden text-nowrap hover:text-foreground transition-all ${
            expanded ? "w-48 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
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
      </li>
    </Link>
  );
}
