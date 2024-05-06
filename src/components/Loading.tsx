// Overlay.tsx
import React from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const Overlay = ({text}:{text:string}) => (
    <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <Button variant={"outline"} className="flex items-center justify-center hover:bg-background hover:cursor-default">
            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
            <p className="text-gray-100 text-lg ml-4">{text}</p>
            </Button>
        </div>
    </>
);

export default Overlay;
