import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BudgetProvider } from "./constexts/BudgetContext.tsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <BudgetProvider>
        <Routes>
          <Route index element={<App />} />

       
        </Routes>
       
      </BudgetProvider>
    </BrowserRouter>
  </StrictMode>
);
