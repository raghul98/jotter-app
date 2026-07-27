export default function NoteListItem() {
  return (
    <article className="note-card-item">
      <div className="note-card-date">
        <span>08</span>
        <span>AUG</span>
      </div>
      <div className="note-card-content">
        <h3>React App Ideas</h3>
        <p>1. Star Wars Scorecard App</p>
      </div>
      <button className="delete-btn" aria-label="Delete note">
        ✕
      </button>
    </article>
  );
}
