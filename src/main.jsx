import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Main from "./components/Main.jsx";
import { DndContext } from "@dnd-kit/core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DndContext onDragEnd={console.log}>
      <Main />
    </DndContext>
  </StrictMode>,
);
