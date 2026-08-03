import { useNotes, type Note } from "../context/NotesContext";
// import Toolbar from "./Toolbar";

type NoteEditorProps = {
  note: Note;
};

export function NoteEditor({ note }: NoteEditorProps) {
  const { updateActiveNote } = useNotes();
  return (
    <div className="editor-container">
      {/* Top Header Navigation */}
      <nav className="editor-nav">
        <button className="back-btn">Back</button>
      </nav>

      {/* Note Content Area */}
      <div className="editor-body">
        <input
          type="text"
          className="editor-title-input"
          placeholder="Category / Subtitle"
          value={note.title}
          onChange={(event) => updateActiveNote({ title: event.target.value })}
        >
          {note.title}
        </input>
        {/* <input
          type="text"
          className="editor-subtitle-input"
          placeholder="Title"
        /> */}
        <textarea
          className="editor-textarea"
          placeholder="Start typing your note..."
          value={note.content}
          onChange={(event) =>
            updateActiveNote({ content: event.target.value })
          }
        >
          {note.content}
        </textarea>
      </div>
      {/* <Toolbar /> */}

      <div className="toolbar">
        <select className="font-size-select">
          <option value="14pt">{note.fontSize}</option>
        </select>
        <button className="format-btn bold">B</button>
        <button className="sticker-picker-btn">
          <img src="/sticker-rocket.png" alt="Stickers" />
        </button>
      </div>

      {/* Bottom Floating Toolbar Variant 2 (Color / Sticker Swatches)
      <div className="toolbar swatches-toolbar">
        <button className="color-swatch blue" />
        <button className="color-swatch red" />
        <button className="color-swatch black" />
        <button className="sticker-swatch">
          <img src="/sticker-rocket.png" alt="Sticker" />
        </button>
      </div> */}
    </div>
  );
}
