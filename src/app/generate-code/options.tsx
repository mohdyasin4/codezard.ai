import { Squircle } from 'lucide-react';

export const languageOptions = [
    { name: "Html", icon: "vscode-icons:file-type-html" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "Python", icon: "logos:python" },
    { name: "Java", icon: "devicon-plain:java" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "C#", icon: "devicon:csharp" },
  ];
  
  export const templateOptions = {
    Html: [
      { id: 1, name: "Login Form", prompt: "Use TailwindCss Provide a Professional login form that also has signup page functionality html code with modern design Utilize a CSS library like Tailwind CSS to ensure responsiveness and consistent styling.include css library cdn make sure css and js code is inline and explain the code as well"},
      { id: 2, name: "Signup Form", prompt: "Develop an intuitive signup form incorporating validation and error handling. Utilize a CSS framework such as Tailwind CSS for enhanced form styling and functionality. make sure css and js code is inline" },
      { id: 3, name: "To-Do List App", prompt: "Build a To-do list application javascript with features like adding, deleting, and updating tasks. Implement drag-and-drop functionality for task reordering make sure js code is inline also make sure to use TailwindCSS for styling" },
      { id: 4, name: "TicTacToe Game", prompt: "Develop a TicTacToe game with a sleek user interface and interactive gameplay. Utilize CSS animations for smooth transitions between game states and provide options for single-player and multiplayer modes.make sure css and js codde is inline" },
      { id: 5, name: "Calculator", prompt: "Create a functional calculator application in HTML inline CSS and javascript with support for basic arithmetic operations. Implement keyboard support for enhanced user experience" },
      { id: 6, name: "Custom Prompt"},
    ],
    JavaScript: [
      { id: 7, name: "Node.js Server", prompt: "Build a Node.js server with Express.js framework to handle HTTP requests and responses for backend development in the terminal." },
      { id: 8, name: "To-Do List App", prompt: "Create a to-do list application using JavaScript for terminal-based interaction, featuring adding, editing, and deleting tasks." },
      { id: 9, name: "Weather App", prompt: "Develop a weather application that fetches data from a weather API and displays weather information for a given location in the terminal." },
      { id: 10, name: "Quiz App", prompt: "Build a quiz application with multiple-choice questions and scoring functionality using JavaScript, suitable for terminal-based usage." },
      { id: 11, name: "Chat Application", prompt: "Design a real-time chat application using Node.js with Socket.io for WebSocket communication, suitable for terminal-based interaction." },
    ],
    Python: [
      { id: 12, name: "Data Analysis Script", prompt: "Develop a Python script for data analysis using libraries like Pandas, NumPy, and Matplotlib, suitable for terminal-based data processing." },
      { id: 13, name: "Machine Learning Model", prompt: "Build a machine learning model in Python using frameworks like TensorFlow or scikit-learn for tasks like classification or regression, suitable for terminal-based model training." },
      { id: 14, name: "Web Scraping Script", prompt: "Write a Python script for web scraping to extract data from websites using libraries like BeautifulSoup or Scrapy, suitable for terminal-based data extraction." },
      { id: 15, name: "API Integration", prompt: "Integrate with a third-party API using Python to fetch and process data for use in your application, suitable for terminal-based API interaction." },
    ],
    Java: [
      { id: 16, name: "Hello World", prompt: "Create a simple 'Hello, World!' program in Java to demonstrate basic syntax and structure, suitable for terminal-based execution." },
      { id: 17, name: "Calculator", prompt: "Implement a calculator application in Java with support for basic arithmetic operations like addition, subtraction, multiplication, and division, suitable for terminal-based usage." },
      { id: 18, name: "Banking System", prompt: "Design a banking system in Java with classes for customers, accounts, and transactions, supporting features like deposits, withdrawals, and transfers, suitable for terminal-based interaction." },
      { id: 19, name: "Inventory Management System", prompt: "Develop an inventory management system in Java to track products, quantities, and suppliers, with features for adding, updating, and deleting items, suitable for terminal-based usage." },
    ],
    "Node.js": [
      { id: 20, name: "Express App", prompt: "Develop an Express.js application for building web servers and APIs in Node.js, featuring middleware, routing, and error handling for terminal-based backend development." },
      { id: 21, name: "REST API", prompt: "Build a RESTful API using Node.js and Express.js to expose CRUD operations for a resource like users, products, or tasks, suitable for terminal-based API development." },
      { id: 22, name: "Authentication System", prompt: "Implement an authentication system in Node.js with features like user registration, login, logout, and password reset using JWT or sessions, suitable for terminal-based authentication." },
      { id: 23, name: "Real-time Chat App", prompt: "Create a real-time chat application using Socket.io for WebSocket communication and Express.js for handling HTTP requests, suitable for terminal-based chat system development." },
    ],
    "C#": [
      { id: 24, name: "Console Application", prompt: "Create a console application in C# to demonstrate basic I/O operations and control flow constructs, suitable for terminal-based execution." },
      { id: 25, name: "RESTful API", prompt: "Implement a RESTful API in C# using ASP.NET Web API framework to expose CRUD operations for a resource like customers, products, or orders, suitable for terminal-based API development." },
    ],
  };
  

 export const modelOptions = [
    // { name: "GPT-3.5 Turbo", value: "gpt", icon: "simple-icons:openai" },
    {
      name: "Google Gemini Pro",
      value: "gemini",
      icon: "simple-icons:googlegemini",
    },
  ];

  
export const premadeTemplates = [
  {
    id: 1,
    icon: <Squircle radius="14" stroke="none" fill="#7AFF11" size={12} />, // Use Squircle component directly
    text: "Login Form",
    prompt:
      "Use TailwindCss Provide a Professional login form html code with modern design Utilize a CSS library like Tailwind CSS to ensure responsiveness and consistent styling.include css library cdn make sure css and js code is inline and explain the code as well",
  },
  {
    id: 2,
    icon: <Squircle radius="14" stroke="none" fill="#8E55EA" size={12} />, // Use Squircle component directly
    text: "Signup Form",
    prompt:
      "Develop an intuitive signup form incorporating validation and error handling. Utilize a CSS framework such as Tailwind CSS for enhanced form styling and functionality. make sure css and js codde is inline",
  },
  {
    id: 3,
    icon: <Squircle radius="14" stroke="none" fill="#3E90F0" size={12} />, // Use Squircle component directly
    text: "To-Do List App",
    prompt:
      "Build a responsive to-do list application in simple html inline css and javascript with features like adding, deleting, and updating tasks. Implement drag-and-drop functionality for task reordering using a library like React Beautiful DnD. make sure css and js codde is inline",
  },
  {
    id: 4,
    icon: <Squircle radius="14" stroke="none" fill="#D84C10" size={12} />, // Use Squircle component directly
    text: "TicTacToe Game",
    prompt:
      "Develop a TicTacToe game with a sleek user interface and interactive gameplay. Utilize CSS animations for smooth transitions between game states and provide options for single-player and multiplayer modes.make sure css and js codde is inline",
  },
  {
    id: 5,
    icon: <Squircle radius="14" stroke="none" fill="#CFFF04" size={12} />, // Use Squircle component directly
    text: "Calculator",
    prompt:
      "Create a functional calculator application in HTML inline CSS and javascript with support for basic arithmetic operations. Implement keyboard support for enhanced user experience ",
  },
];