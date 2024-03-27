"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { Icon } from '@iconify/react';
import { PanelLeftOpen, PanelLeftClose, BellIcon } from "lucide-react";
import { Toggle } from "../ui/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ModeToggle } from "../Theme-toggle";
import Searchbar from "../Searchbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is a notification",
      date: "26-03-2024",
      read: true,
    },
    {
      text: "How's the New Look? Let us know!",
      date: "25-03-2024",
      read: false,
    },
  ]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className="flex ml-5">
          {/* <Toggle
            className="p-2 m-2 "
            aria-label="Toggle italic"
            onClick={handleToggle}
          >
            {isOpen ? (
              <PanelLeftClose color="#fff" size={24} />
            ) : (
              <PanelLeftOpen color="#6C7275" size={24} />
            )}
          </Toggle> */}
          <Link href="/">
          <Image src="/darklogo.svg" alt="logo" width={140} height={100} />
          </Link>
        </div>
        <div className="flex gap-2 justify-end p-2 items-center ">
          <Searchbar />
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com/mohdyasin4/" target="blank">
            <Icon icon="simple-icons:github" className="h-5 w-5" />
            </Link>
          </Button>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button className="relative h-10" variant="ghost" size="icon">
              <div className={`absolute top-[6px] right-[8px] h-2 w-2 rounded-full border-solid border-2 border-[#09090B] my-1 ${notifications.find((x: any) => x.read === true) ? 'bg-[#FEA450]' : 'bg-neutral-200'}`}></div>
                <BellIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4" align="end">
              {notifications.map((item: any, key: number) => 
                <DropdownMenuItem
                  key={key}
                  className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
                >
                  <div
                    className={`h-3 w-3 rounded-full my-1 ${
                      !item.read ? "bg-[#FEA450]" : "bg-neutral-200"
                    }`}
                  ></div>
                  <div>
                    <p>{item.text}</p>
                    <p className="text-xs text-neutral-500">{item.date}</p>
                  </div>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <Avatar className="mr-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
        </div>
      </nav>
    </>
  );
}
