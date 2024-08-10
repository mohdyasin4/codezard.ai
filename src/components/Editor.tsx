import React, { useState, useEffect, useRef, useContext } from "react";
import MonacoEditor, { EditorProps } from "@monaco-editor/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Cobalt from "monaco-themes/themes/Cobalt.json";
import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Icon } from "@iconify/react";
import { Button } from "./ui/button";
import { Check, ChevronRight, Copy, CopyCheck, Download, Play, PlusCircleIcon, X } from "lucide-react";
import {
  useGeneratedLanguage,
  useGeneratedCode,
} from "@/app/GeneratedCodeContext";
import { generateCodeOpenAI, generateExplainationOpenAI } from "@/app/api/openai/api";
import { generateCodeGemini, generateExplainationGemini } from "@/app/api/gemini/api";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "./ui/dialog";
import { languageOptions, templateOptions, modelOptions } from "@/app/generate-code/options";
import { useToast } from "@/components/ui/use-toast";
import Overlay from "./Loading";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const files = {
  Code: {
    icon: "ri:html5-fill",
    name: "CODE",
    language: "html",
    value: "<h1>Hello, world!</h1>",
  },
  Explaination: {
    name: "EXPLAINATION",
    value: "body { background-color: #f0f0f0; }",
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
          rules?: any[];
          colors?: {
            [key: string]: string;
          };
        }
      ) => void;
      setTheme: (arg0: string) => void;
    };
  }
) => {
  // Modify the editor.background color in the Cobalt theme
  const modifiedCobaltTheme = {
    ...Cobalt, // Use all properties from the Cobalt theme
    colors: {
      ...Cobalt.colors, // Use all colors from Cobalt theme
      "editor.background": "#111111", // Change editor background color to #111111
    },
    rules: Cobalt.rules.map((rule: any) => ({
      ...rule,
      background: rule.background === "#111111", // Pass #111111 to background in rules
    })),
  };

  // Define the "cobalt" theme using modifiedCobaltTheme
  monaco.editor.defineTheme("cobalt", modifiedCobaltTheme);
  // Set the editor theme to "cobalt"
  monaco.editor.setTheme("cobalt");
};

const Editor = () => {
  const [activeTab, setActiveTab] = useState("Code");
  const [htmlCode, setHtmlCode] = useState(files["Code"].value);
  const [explaination, setExplaination] = useState("");
  const [loading, setLoading] = useState(false);
  const [showExplaination, setShowExplaination] = useState(false); // State to manage the visibility of the explanation tab
  const { code } = useGeneratedCode();
  const [intitialCode, setInitialCode] = useState(htmlCode);
  const [generationType, setGenerationType] = useState(""); // State to track code/explanation generation type
  const [terminalOutput, setTerminalOutput] = useState(""); // State to store the output of the terminal
  const [icon, setIcon] = useState("ri:html5-fill"); // Initialize icon with HTML icon
  const { language, setLanguage } = useGeneratedLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const { toast } = useToast();
  const languageIconMap = {
    html: "ri:html5-fill",
    javascript: "ri:javascript-fill",
    python: "simple-icons:python",
    java: "la:java",
    nodejs: "ri:nodejs-fill",
    js: "ri:nodejs-fill",
    "c#": "devicon-plain:csharp",
    // Add more mappings for other languages if needed
  };
  const [lastEditedCode, setLastEditedCode] = useState({
    Code: "",
    Explaination: "",
    "script.js": "",
  });
  const selectedModel = localStorage.getItem("selectedModel");
  const [showTerminal, setShowTerminal] = useState(false);
  const [customPrompt, setCustomPrompt] = useState(""); // State to track the value of the input field
  const [open, setOpen] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  // Function to get the icon based on the language
  const getIconForLanguage = (language: string) => {
    return languageIconMap[language] || "ri:code-line"; // Default icon if language not found
  };

  // Update the icon when language changes
  useEffect(() => {
    const newIcon = getIconForLanguage(language);
    setIcon(newIcon);
  }, [language]);
  // Function to update code based on active tab
  const updateCodeState = (code: any, tabName: any) => {
    // Check if lastEditedCode is null, then use initialCode
    const updatedCode = lastEditedCode[tabName] || intitialCode;
    switch (tabName) {
      case "Code":
        setHtmlCode(updatedCode);
        break;
      default:
        break;
    }
  };

  const handleTabChange = (tabName: React.SetStateAction<string>) => {
    // Update the code state if the active tab is different from the tab being switched to
    if (activeTab !== tabName) {
      updateCodeState(lastEditedCode[activeTab], activeTab);
    }
    setActiveTab(tabName);

    // Update the icon based on the language only if the active tab is "Code"
    if (tabName === "Code") {
      const icon = getIconForLanguage(language);
      files["Code"].icon = icon;
    }
  };

  useEffect(() => {
    setShowTerminal(true);
  }, [language]);

  // Function to handle changes in the input field value
  const handleCustomPromptChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCustomPrompt(event.target.value);
  };

  const handleLanguageChange = () => {
    setLanguage(selectedLanguage);
    setSelectedLanguage(selectedLanguage); // Update the selected language state if needed
    // Show toast notification
  };

  const handleHtmlChange = (value: any) => {
    setHtmlCode(value || "");
    setLastEditedCode({ ...lastEditedCode, ["Code"]: value });
  };


  const generateCustomPrompt = async () => {
    // Get the value of the custom prompt input
    const customPrompt = (document.getElementById("custom-prompt") as HTMLInputElement)?.value;
    setGenerationType("code");
    // Perform validation or additional processing if needed
    let response;
    let language;
    let code;
    // Pass the custom prompt to the appropriate function for generating code
    // For example, if selectedModel is "gpt":
    setOpen(false);
    if (selectedModel === "gpt") {   
      // Close the dialog
      // Call the function to generate code with the custom prompt
      response = await generateCodeOpenAI(customPrompt, setLoading);
      if(response){
        code = response.code;
        language = response.language;
      }
    } else if (selectedModel === "gemini") {   
      // Close the dialog
      // Call the function to generate code with the custom prompt
      response = await generateCodeGemini(customPrompt, setLoading, localStorage.getItem("gemini-apiKey") || "");
      if(response){
        code = response.code;
        language = response.language;
      }
    } else {
      console.error("Invalid model selected");
      return;
    }
    setLanguage(language); // Update the language state with the generated language
    setHtmlCode(code); // Update the code state with the generated code
 
  };
  const handleExplainCode = async () => {
    setGenerationType("explanation");
    console.log('handleExplainCode initialized'); // Add debug statement
    // Check if there is content in the editor or htmlCode
    if (!htmlCode.trim()) {
      return toast({
        variant: "destructive",
        icon: "ri:error-warning-fill",
        description: "Please enter some code to explain.",
      })
    }
  
    try {
      console.log('generating explaination')
      setLoading(true); // Show loading overlay
      let explaination;
      if (selectedModel === "gpt") {
        explaination = await generateExplainationOpenAI(htmlCode, setLoading);
      } else if (selectedModel === "gemini") {
        explaination = await generateExplainationGemini(htmlCode, setLoading, localStorage.getItem("gemini-apiKey") || "");
      } else {
        console.error("Invalid model selected");
        return;
      }
      setExplaination(explaination);
      setShowExplaination(true);
      setActiveTab("Explaination");
    } catch (error) {
      console.error("Error generating explanation:", error); // Add debug statement
    } finally {
      setLoading(false); // Hide loading overlay
    }
    
    // Check if the explanation tab is active
    if (!showExplaination) {
      return;
    }
  };
  
  // Check if the language is JavaScript, Python, or Node.js
  useEffect(() => {
    if (
      language === "javascript"
    ) {
      setShowTerminal(true);
    } else {
      setShowTerminal(false);
    }
  }, [language]);


  const handleCloseExplaination = () => {
    setShowExplaination(false);
    setActiveTab("Code");
  };

  useEffect(() => {
    if (showExplaination && code !== htmlCode) {
      handleCloseExplaination();
    }
  }, [code]);

  useEffect(() => {
    if (!showExplaination) {
      setActiveTab("Code");
    }
  }, [showExplaination]);

  useEffect(() => {
    setHtmlCode(code);
  }, [code]);

  const toggleCustomPromptDialog = () => {
    setCustomPromptDialogOpen(!isCustomPromptDialogOpen);
  };

  useEffect(() => {
    setInitialCode(htmlCode);
  }, [htmlCode]);

  useEffect(() => {
    if (htmlCode) {
      const iframe = document.getElementById("preview");
      if (iframe) {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(htmlCode);
          doc.close();
        }
      }
    }
  }, [htmlCode]);


  const renderTerminalOrComingSoon = () => {
    if (language === "python" || language === "nodejs" || language === "java" || language === "c#") {
      return (
        <div className="h-full w-full flex items-center justify-center text-white">
          <p className="text-xl font-semibold">Coming Soon</p>
        </div>
      );
    };
  };

  // Function to update the icon based on the language
  const updateIconForLanguage = () => {
    const icon = getIconForLanguage(language);
    files["Code"].icon = icon;
  };

  useEffect(() => {
    // Update the icon when language changes
    updateIconForLanguage();
  }, [language]);


  const captureConsoleOutput = (message: string) => {
    const terminal = document.getElementById("terminal");
    if (terminal) {
      terminal.innerText += message + "\n"; // Append the message to the existing terminal content
    }
  };

  const runJavaScriptCode = (htmlCode: string) => {
    try {
      // Use Function constructor to evaluate JavaScript code
      const fn = new Function(htmlCode);
      // Override console.log to capture output
      const originalConsoleLog = console.log;
      console.log = (...args: any[]) => {
        // Convert each argument to a string and concatenate them
        const output = args.map((arg) => {
          return typeof arg === "string" ? arg : JSON.stringify(arg);
        }).join(" ");
        // Append the output to the terminal
        captureConsoleOutput(output);
      };
      // Execute the JavaScript code
      fn();
      // Restore the original console.log
      console.log = originalConsoleLog;
    } catch (error) {
      console.error("Error running JavaScript code:", error);
      captureConsoleOutput(`Error: ${error.message}`);
    }
  };

  const handleRunCode = () => {
    // Clear the terminal before running the code

    const originalConsoleLog = console.log; // Save the original console.log function
    console.log = captureConsoleOutput; // Override the console.log function

    document.getElementById("terminal")!.innerText = "";

    // Display "Running code..." in the terminal
    captureConsoleOutput("Running code...");

    // Delay the execution of the code for 2 seconds
    setTimeout(() => {
      document.getElementById("terminal")!.innerText = "";
      let result;
      try {
        // Run the JavaScript code
        result = runJavaScriptCode(htmlCode);
        // Restore the original console.log function
        console.log = originalConsoleLog;

        console.log(result); // Log the result (if any) to the console
      } catch (error) {
        console.error("Error running JavaScript code:", error);
        captureConsoleOutput(`Error: ${error.message}`);
      }
      console.log(eval(htmlCode));
      // Append the result to the terminal
      // captureConsoleOutput(result);
    }, 2000); // Delay for 2 seconds (2000 milliseconds)
  };

  const handleCopyCode = () => {
    // Copy the htmlCode to the clipboard
    navigator.clipboard.writeText(htmlCode)
      .then(() => {
        toast({
          variant: "success",
          icon: "lucide:copy-check",
          description: "Code copied to clipboard.",
        });
        setCodeCopied(true);
        setTimeout(() => {
          setCodeCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error copying code to clipboard:", error);
        toast({
          variant: "destructive",
          icon: "ri:error-warning-fill",
          description: "Error copying code to clipboard.",
        });
      });
  };

  const appendToTerminal = (message: string) => {
    // Get the terminal element
    const terminal = document.getElementById("terminal");
    // Create a new paragraph element
    const paragraph = document.createElement("p");
    // Set the text content of the paragraph to the message
    paragraph.textContent = message;
    // Append the paragraph to the terminal
    if (terminal) {
      terminal.appendChild(paragraph);
    }
  };

  const handleClearTerminal = () => {
    document.getElementById("terminal")!.innerText = "";
  }
  
  const handleDownloadCode = () => {
    let extension = "";
    let filename = "code";

    // Determine the file extension based on the selected language
    switch (language) {
      case "html":
        extension = "html";
        break;
      case "javascript":
        extension = "js";
        break;
      case "python":
        extension = "py";
        break;
      case "java":
        extension = "java";
        break;
      case "c#":
        extension = "cs";
        break;
      default:
        extension = "txt"; // Default to .txt if the language is not recognized
    }

    // Set the filename with the appropriate extension
    filename = `${filename}.${extension}`;

    // Create a Blob with the code content
    const blob = new Blob([htmlCode], { type: "text/plain" });
    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);
    // Create a link element
    const link = document.createElement("a");
    // Set the href attribute to the temporary URL
    link.href = url;
    // Set the download attribute to specify the filename
    link.download = filename;
    // Append the link to the document body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document body
    document.body.removeChild(link);
    // Revoke the temporary URL
    window.URL.revokeObjectURL(url);
  };
  
  
  return (
    <>
    {loading && (
      <Overlay text={generationType === "explanation" ? "Generating Explanation..." : "Generating Code..."} />)}
      <div
        className={`flex flex-col h-[94vh] w-full overflow-hidden border-box`}
      >
        <div className="flex  justify-between items-center bg-[#1a1a1a] gap-2 p-2">
          {/* Buttons */}
          <div className="flex items-center gap-2 font-bold text-lg">
          <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger>
                
          <Button variant={"gooeyLeft"} onClick={()=>{setOpen(true)}}>
            <PlusCircleIcon size={18} className="mr-2" />
            Generate New Code
          </Button>
              </DialogTrigger>
              <DialogContent  className=" max-w-xl grid-2 gap-6 flex flex-col">
              <Label>Enter your custom prompt</Label>
                <Textarea
                  id="custom-prompt"
                  type="text"
                  placeholder="Enter your custom prompt"
                  value={customPrompt}
                  onChange={handleCustomPromptChange} // Attach change event handler
                  className="w-full p-2 text-white rounded-md"
                />

                <DialogFooter>
                  <Button onClick={generateCustomPrompt} disabled={!customPrompt} className="w-full">Generate</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <div className="bg-[#09090B] rounded-md">
              <Select
                onValueChange={(value) => {
                  setLanguage(value);
                  setSelectedLanguage(value);
                  toast({
                    variant: "success",
                    icon: `${languageIconMap[value] || "ri:code-line"}`,
                    description: `Editor language changed to ${value}.`,
                  });
                }}
              >
                <SelectTrigger className="w-[250px]">
                  <SelectValue placeholder="Change Editor Language Here" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="html">
                      <div className="flex items-center">
                        <Icon icon={"devicon:html5"} className="mr-2 h-4 w-4" />
                        HTML5
                      </div>
                    </SelectItem>
                    <SelectItem value="javascript">
                      <div className="flex items-center">
                        <Icon
                          icon={"devicon:javascript"}
                          className="mr-2 h-4 w-4"
                        />
                        Javascript
                      </div>
                    </SelectItem>
                    <SelectItem value="python">
                      <div className="flex items-center">
                        <Icon
                          icon={"devicon:python"}
                          className="mr-2 h-4 w-4"
                        />
                        Python
                      </div>
                    </SelectItem>
                    <SelectItem value="java">
                      <div className="flex items-center">
                        <Icon icon={"devicon:java"} className="mr-2 h-4 w-4" />
                        Java
                      </div>
                    </SelectItem>
                    <SelectItem value="nodejs">
                      <div className="flex items-center">
                        <Icon
                          icon={"devicon:nodejs"}
                          className="mr-2 h-4 w-4"
                        />
                        Node JS
                      </div>
                    </SelectItem>
                    <SelectItem value="c#">
                      <div className="flex items-center">
                        <Icon
                          icon={"devicon:csharp"}
                          className="mr-2 h-4 w-4"
                        />
                        C#
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          
            <Button variant={"outline"} onClick={handleExplainCode}>
              Explain Code
            </Button>
          </div>
          <Button variant={"outline"} onClick={handleDownloadCode}>
            <Download className="mr-2" size={16} />
            Download Code
          </Button>
        </div>
        <ResizablePanelGroup className="h-full" direction="horizontal">
          <ResizablePanel defaultSize={40}>
            <div className="h-[94vh]">
              <div className="bg-[#27272A] w-full ">
                <Tabs
                  value={activeTab}
                  className="flex items-center justify-between"
                >
                  <TabsList>
                    <TabsTrigger
                      value="Code"
                      onClick={() => handleTabChange("Code")}
                    >
                      <Icon
                        icon={files["Code"].icon}
                        height={18}
                        width={18}
                        className="mr-2"
                      />
                      {files["Code"].name}
                    </TabsTrigger>
                    {showExplaination && (
                      <TabsTrigger
                        value="Explaination"
                        className="flex justify-around pr-1 pl-2"
                        onClick={() => handleTabChange("Explaination")}
                      >
                        {files.Explaination.name}
                        {activeTab === "Explaination" && (
                          <Button
                            variant="ghost"
                            size="xs"
                            className="p-1 right-0 mr-0 ml-4"
                            onClick={handleCloseExplaination}
                          >
                            <X size={12} className="p-0" />
                          </Button>
                        )}
                      </TabsTrigger>
                    )}
                  </TabsList>
                  <div>
                    <Button
                      size={"sm"}
                      variant={"codePrimary"}
                      className="my-2"
                      disabled={language !== "javascript"} // Disable the button if the language is not JavaScript
                      onClick={handleRunCode}
                    >
                      <Play size={14} fill="#fff" className="mr-2" /> Run Code
                    </Button>
                    <Button id="copy-button" onClick={handleCopyCode} variant={"secondary"}>
                      {codeCopied ? <CopyCheck size={14} /> : <Copy size={14} />}
                    </Button>
                  </div>
                </Tabs>
              </div>
              <div className="bg-[#1e1e1e] h-full w-full">
                {activeTab === "Code" && (
                  <>
                    <div>
                      <div className="h-screen">
                        <MonacoEditor
                          height="100%"
                          onMount={handleEditorDidMount}
                          path={files["Code"].name}
                          language={language}
                          value={htmlCode || intitialCode}
                          wordWrap="true"
                          onChange={handleHtmlChange}
                        />
                      </div>
                    </div>
                  </>
                )}
                {showExplaination && activeTab === "Explaination" && (
                  <div className="bg-[#111111] h-screen w-full">
                    <h1 className="p-2 font-bold font-Inter text-sm">
                      CODE EXPLAINATION :
                    </h1>
                    <Separator />
                    <MonacoEditor
                      height="100%"
                      language="markdown" // Set language to Markdown
                      onMount={handleEditorDidMount}
                      value={explaination}
                      options={{
                        readOnly: true, // Make the explanation read-only
                        wordWrap: "on", // Enable word wrap
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <div className="flex flex-col relative h-full w-full">
              {language == "html" && (
                <iframe
                  title="Live Preview"
                  width="100%"
                  height="100%"
                  id="preview"
                  sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms allow-top-navigation-by-user-activation  allow-popups-to-escape-sandbox allow-presentation "
                  style={{ border: "none" }}
                />
              )}
              {renderTerminalOrComingSoon()}
              {showTerminal && (
                <>
                  <div className="h-full w-full ">
                    <Tabs
                      defaultValue="Console"
                      className="relative h-9 w-full"
                    >
                      <div className="flex h-9 w-full justify-start rounded-none border-b bg-transparent p-0">
                        <TabsList className="w-full h-full flex justify-between rounded-none bg-transparent p-0">
                          <TabsTrigger
                            value="Console"
                            className="h-9 relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none "
                          >
                            Console
                          </TabsTrigger>
                          <Button
                            variant="ghost"
                            onClick={handleClearTerminal}
                            className="rounded-none border border-l-2 border-collapse border-r-0 border-y-0 bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground hover:bg-red-900 hover:border-l-red-900"
                          >
                            Clear
                            <X size={14} className="ml-2" />
                          </Button>
                        </TabsList>
                      </div>
                    </Tabs>
                    <div
                      className="relative h-full w-full bg-transparent p-2 text-white"
                      id="terminal"
                      style={{ fontFamily: "Cascadia Code, monospace" }}
                    >
                      <ChevronRight size={12} />
                      <h1
                        className="relative w-[max-content] font-mono  
before:absolute before:inset-0 before:animate-typewriter before:bg-[#09090B] 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white"
                      >
                        Welcome to Codezard Terminal!
                      </h1>
                    </div>
                  </div>
                </>
              )}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default Editor;
