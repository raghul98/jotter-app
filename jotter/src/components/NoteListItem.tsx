import { useNotes, type Note } from "../context/NotesContext";

type NoteListItemProps = {
  note: Note;
};

export default function NoteListItem({
  note: { id, title, content, date },
}: NoteListItemProps) {
  const { deleteNote, openNote } = useNotes();

  return (
    <article className="note-card-item" onClick={() => openNote(id)}>
      <div className="note-card-date">
        <span>{date.slice(0, 3)}</span>
        <span>{date.slice(3, 6)}</span>
      </div>
      <div className="note-card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <button
        className="delete-btn"
        aria-label="Delete note"
        onClick={(event) => {
          event.stopPropagation();
          deleteNote(id);
        }}
      >
        ✕
      </button>
    </article>
  );
}
