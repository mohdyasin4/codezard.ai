import React from "react";
import { useRouter } from "next/navigation";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Compass, Home, MessagesSquare, Users2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface ToggleNavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: React.ComponentType<any>;
    href: string;
  }[];
}

export function ToggleNav({ isCollapsed, links }: ToggleNavProps) {
  const router = useRouter();

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 ">
        <ToggleGroup type="single" className="flex flex-col">
          {links.map((item) => (
            <Tooltip key={item.title} delayDuration={0}>
              <TooltipTrigger asChild>
                <ToggleGroupItem
                  value={item.title}
                  isActive={router.pathname === item.href}
                  aria-label={`Toggle ${item.title}`}
                  className={
                    router.pathname === item.href
                      ? "active-toggle-group-item"
                      : ""
                  }
                >
                  <a href={item.href}>
                    <item.icon className="h-4 w-4" />
                  </a>
                </ToggleGroupItem>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="flex items-center gap-4"
              >
                <span className="ml-auto text-foreground">
                  {item.title}
                  {item.label}
                </span>
              </TooltipContent>
            </Tooltip>
          ))}
        </ToggleGroup>
      </nav>

      <style jsx>{`
        .active-toggle-group-item {
          // Add your active button styles here
          background-color: #e5e5e5;
          color: #333;
        }
      `}</style>
    </div>
  );
}
