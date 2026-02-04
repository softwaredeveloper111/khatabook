import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";



createRoot(document.getElementById("root")).render(
  <ThemeProvider 
     attribute="class"
      defaultTheme="system"
      enableSystem>
    <TooltipProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>,
);
