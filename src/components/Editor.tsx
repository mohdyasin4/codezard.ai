import React, { useState, useContext } from "react";
import MonacoEditor from "@monaco-editor/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import blackboard from "monaco-themes/themes/Cobalt.json";
import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/components/ui/resizable";
import html5icon from "@iconify/react";
import css3icon from "@iconify/react";
import javascriptIcon from "@iconify/react";
import { Button } from "./ui/button";
import { Copy, Download } from "lucide-react";

const files = {
  "index.html": {
    icon: "html5",
    name: "index.html",
    language: "html",
    value: "<h1>Hello, world!</h1>",
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: "body { background-color: #f0f0f0; }",
  },
  "script.js": {
    name: "script.jss",
    language: "javascript",
    value: 'console.log("Hello, world!")',
  },
};

const handleEditorDidMount = (
  editor: any,
  monaco: {
    editor: {
      defineTheme: (
        arg0: string,
        arg1: {
          base: string;
          inherit: boolean;
          rules: (
            | {
                background: string;
                token: string;
                foreground?: undefined;
                fontStyle?: undefined;
              }
            | {
                foreground: string;
                token: string;
                background?: undefined;
                fontStyle?: undefined;
              }
            | {
                foreground: string;
                fontStyle: string;
                token: string;
                background?: undefined;
              }
            | {
                foreground: string;
                background: string;
                token: string;
                fontStyle?: undefined;
              }
            | {
                foreground: string;
                background: string;
                fontStyle: string;
                token: string;
              }
          )[];
          colors: {
            "editor.foreground": string;
            "editor.background": string;
            "editor.selectionBackground": string;
            "editor.lineHighlightBackground": string;
            "editorCursor.foreground": string;
            "editorWhitespace.foreground": string;
          };
        }
      ) => void;
      setTheme: (arg0: string) => void;
    };
  }
) => {
  monaco.editor.defineTheme("blackboard", blackboard);
  monaco.editor.setTheme("blackboard");
};

const Editor = ({ sidebarExpanded }: EditorProps) => {
  const [activeTab, setActiveTab] = useState("index.html");
  const [htmlCode, setHtmlCode] = useState(files["index.html"].value);
  const [cssCode, setCssCode] = useState(files["style.css"].value);
  const [jsCode, setJsCode] = useState(files["script.js"].value);
  const [lastEditedCode, setLastEditedCode] = useState({
    "index.html": "",
    "style.css": "",
    "script.js": "",
  });

  const handleTabChange = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
    if (lastEditedCode[activeTab]) {
      updateCodeState();
    }
  };

  const handleHtmlChange = (value: any) => {
    setHtmlCode(value || "");
    setLastEditedCode({ ...lastEditedCode, ["index.html"]: value });
  };

  const handleCssChange = (value: any) => {
    setCssCode(value || "");
    setLastEditedCode({ ...lastEditedCode, ["style.css"]: value });
  };

  const handleJsChange = (value: any) => {
    setJsCode(value || "");
    setLastEditedCode({ ...lastEditedCode, ["script.js"]: value });
  };

  const updateCodeState = () => {
    switch (activeTab) {
      case "index.html":
        setHtmlCode(lastEditedCode[activeTab]);
        break;
      case "style.css":
        setCssCode(lastEditedCode[activeTab]);
        break;
      case "script.js":
        setJsCode(lastEditedCode[activeTab]);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={`h-screen w-screen overflow-hidden border-box`}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={40}>
            <div className="bg-[#27272A] w-full">
              <div className="flex justify-between items-center bg-[#101010] gap-2 p-2">
                {/* Buttons */}
                <div className="flex gap-2">
                  <Button variant={"outline"}>Change Language Dropdown</Button>
                  <Button variant={"outline"}>Explain Code</Button>
                </div>
                <Button variant={"outline"}>
                  <Download className="mr-2" size={16} />
                  Download Code
                </Button>
              </div>
              <Tabs defaultValue={activeTab} className="flex justify-between">
                <TabsList>
                  {Object.keys(files).map((fileName) => (
                    <TabsTrigger
                      key={fileName}
                      value={fileName}
                      onClick={() => handleTabChange(fileName)}
                    >
                      {fileName}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <Button variant={"secondary"}>
                  <Copy size={14} />
                </Button>
              </Tabs>
            </div>
            <div className="bg-[#1e1e1e] h-full w-full">
              {activeTab === "index.html" && (
                <MonacoEditor
                  height="100%"
                  onMount={handleEditorDidMount}
                  path={files["index.html"].name}
                  defaultLanguage={files["index.html"].language}
                  defaultValue={htmlCode}
                  wordWrap="true"
                  onChange={handleHtmlChange}
                />
              )}
              {activeTab === "style.css" && (
                <MonacoEditor
                  height="100%"
                  theme="vs-dark"
                  onMount={handleEditorDidMount}
                  path={files["style.css"].name}
                  defaultLanguage={files["style.css"].language}
                  defaultValue={cssCode}
                  onChange={handleCssChange}
                />
              )}
              {activeTab === "script.js" && (
                <MonacoEditor
                  height="100%"
                  theme="vs-dark"
                  onMount={handleEditorDidMount}
                  path={files["script.js"].name}
                  defaultLanguage={files["script.js"].language}
                  defaultValue={jsCode}
                  onChange={handleJsChange}
                />
              )}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <iframe
              srcDoc={`<html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`}
              title="Live Preview"
              width="100%"
              height="94%"
              style={{ border: "none" }}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default Editor;
