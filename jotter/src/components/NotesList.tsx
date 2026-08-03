import type { Note } from "../context/NotesContext";
import NoteListItem from "./NoteListItem";

type NotesListProps = {
  notes: Note[];
};

export default function NotesList({ notes }: NotesListProps) {
  return (
    <>
      <div className="notes-container">
        <div className="notebook-pill-title">AARON'S NOTEBOOK</div>
        {notes.length < 1 ? (
          <div className="empty-state">
            <p>You do not have any notes currently.</p>
          </div>
        ) : (
          <div className="notes-list">
            {notes.map((note) => {
              return <NoteListItem key={note.id} note={note} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
