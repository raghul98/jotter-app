import React from "react";

export interface Sticker {
  id: string;
  x: number;
  y: number;
}

export interface Background {
  id: string;
  name: string;
  colorOrUrl: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  stickers: Sticker[];
  fontSize: string;
  date: string;
  bgImage: Background;
}

export type ViewMode = "home" | "list" | "editor";

export interface NoteContextValue {
  notes: Note[];
  activeView: ViewMode;
  activeNoteId: string | null;
  activeNote: Note | undefined;

  setActiveView: (view: ViewMode) => void;
  openNote: (id: string) => void;
  createNewNote: () => void;
  updateActiveNote: (updates: Partial<Note>) => void;
  deleteNote: (id: string) => void;
}

export const NoteContext = React.createContext<NoteContextValue | null>(null);

// export const BACKGROUND_OPTIONS: Background[] = [
//   { id: "white", name: "Clean White", colorOrUrl: "#ffffff" },
//   { id: "yellow", name: "Sticky Yellow", colorOrUrl: "#fef08a" },
//   {
//     id: "grid",
//     name: "Grid Paper",
//     colorOrUrl: 'url("/assets/grid-paper.png")',
//   },
// ];

export function useNotes() {
  const context = React.useContext(NoteContext);

  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
}
