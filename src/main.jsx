import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NotesProvider } from "./NotesProvider.jsx";
import Notes from "./Notes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotesProvider>
      <Notes />
    </NotesProvider>
  </StrictMode>
);
