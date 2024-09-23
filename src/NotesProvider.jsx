import { createContext, useState } from "react";

export const notesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <notesContext.Provider
      value={{ notes, inputValue, setNotes, setInputValue }}
    >
      {children}
    </notesContext.Provider>
  );
};
