"use client";

import React, { useState, useEffect, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { DialogFooter } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "./ui/select";
import { ApiKeyInput } from "./apikey-input";
import { languageOptions, templateOptions, modelOptions } from "@/app/generate-code/options";
import { AlertCircle, Check, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { generateCodeOpenAI } from "@/app/api/openai/api";
import { generateCodeGemini } from "@/app/api/gemini/api";
import { premadeTemplates } from "@/app/generate-code/page";
import { GeneratedCodeContext, useGeneratedCode } from "@/app/GeneratedCodeContext";

const ComingSoonDialog = () => {
    return (
    <>
    
    </>
  );
};

export default ComingSoonDialog;
