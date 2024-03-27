import React from "react";
import {
  Archive,
  Home,
  ArchiveX,
  File,
  Compass,
  Inbox,
  Send,
  Trash2,
  Users2,
  AlertCircle,
  MessagesSquare,
  ShoppingCart,
  Settings,
  LifeBuoy,
  FileText,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TooltipProvider } from "../ui/tooltip";
import { Separator } from "../ui/separator";
// import { Nav } from "../nav";
import { ToggleNav } from "../nav";

export default function Sidebar() {
  return (
    <div className="absolute m-0 p-0 flex flex-col justify-between min-h-[94vh] overflow-auto max-w-[8vw] bg-background border-r-[1px]">
      <TooltipProvider>
        <div>
          <ToggleNav
           links={[
            {
              title: "Home",
              icon: Home,
              href: "/",
            },
            {
              title: "Templates Library",
              icon: Archive,
              href: "/templates",
            },
            {
              title: "Team",
              icon: Users2,
              href: "/team",
            },
            {
              title: "Forum",
              icon: MessagesSquare,
              href: "/forum",
            }
           ]}
           isCollapsed={true} />
          {/* <ToggleNav
            links={[
              {
                title: "Home",
                icon: Home,
                href: "/",
              },
              {
                title: "Templates Library",
                icon: Compass,
                href: "/templates",
              },
              {
                title: "Team",
                icon: Users2,
                href: "/team",
              },
              {
                title: "Forum",
                icon: MessagesSquare,
                href: "/forum",
              },
            ]}
            isCollapsed={true}
          /> */}

          {/* <Nav
            links={[
              {
                title: "Home",
                icon: Home,
                variant: "codePrimary",
              },
              {
                title: "Templates Library",
                icon: Compass,
                variant: "ghost",
              },
              {
                title: "Team",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Forum",
                icon: MessagesSquare,
                variant: "ghost",
              },
            ]}
            isCollapsed={true}
          /> */}
        </div>
      </TooltipProvider>
    </div>
  );
}
