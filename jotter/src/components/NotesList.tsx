import NoteListItem from "./NoteListItem";

export default function NotesList() {
  return (
    <>
      <div className="notes-container">
        <div className="notebook-pill-title">AARON'S NOTEBOOK</div>
        <div className="empty-state">
          <p>You do not have any notes currently.</p>
        </div>
        <div className="notes-list">
          {/* map over the list of notes stored for this notebook */}
          <NoteListItem />
        </div>
      </div>
    </>
  );
}
