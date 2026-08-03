import {
  BACKGROUND_OPTIONS,
  NoteContext,
  type Note,
  type NoteContextValue,
  type ViewMode,
} from "./NotesContext";
import React from "react";

export default function NotesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notes, setNotes] = React.useState<Note[]>([]);
  const [activeView, setActiveView] = React.useState<ViewMode>("home");
  const [activeNoteId, setActiveNoteId] = React.useState<string | null>(null);

  const activeNote = notes.find((note) => note.id === activeNoteId);

  function openNote(id: string) {
    setActiveView("editor");
    setActiveNoteId(id);
  }

  function createNewNote() {
    const newNote: Note = {
      id: crypto.randomUUID(),
      title: "",
      content: "",
      stickers: [],
      fontSize: "14pt",
      date: new Date()
        .toLocaleDateString("en-US", { day: "2-digit", month: "short" })
        .toUpperCase(),
      bgImage: BACKGROUND_OPTIONS[0], //i need multiple backgrounds options with colorOrUrl variable either a color or an image (with paper texture)
    };
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
    setActiveNoteId(newNote.id);
    setActiveView("editor");
  }

  //can we save it when back button is clicked on the note?
  function updateActiveNote(updates: Partial<Note>) {
    // setActiveNoteId(null);
    // setActiveView("list");
    if (!activeNoteId) return;

    // const updatedNote =
    //then i do not need this? and does this logic belong in onChange?
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === activeNoteId) {
          return { ...note, ...updates };
        } else {
          return note;
        }
      });
    });
  }

  function deleteNote(id: string) {
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(newNotes);
    setActiveNoteId(null);
  }

  const value: NoteContextValue = {
    notes,
    activeView,
    activeNoteId,
    activeNote,

    setActiveView,
    openNote,
    createNewNote,
    updateActiveNote,
    deleteNote,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
