import { useNotes, type Note } from "../context/NotesContext";
// import Toolbar from "./Toolbar";
import { FONT_SIZES } from "../constants/fontSizes";
import { BACKGROUND_OPTIONS } from "../constants/backgrounds";

type NoteEditorProps = {
  note: Note;
};

export function NoteEditor({ note }: NoteEditorProps) {
  const { updateActiveNote, setActiveView } = useNotes();
  const isImage = note.bgImage?.colorOrUrl.startsWith("url");
  return (
    <div
      className="editor-container"
      style={{
        backgroundColor: isImage
          ? "#ffffff"
          : note.bgImage?.colorOrUrl || "#ffffff",
        backgroundImage: isImage ? note.bgImage?.colorOrUrl : "none",
        backgroundSize: isImage ? "600px auto" : "auto",
      }}
    >
      {/* Top Header Navigation */}
      <nav className="editor-nav">
        <button className="back-btn" onClick={() => setActiveView("list")}>
          Back
        </button>
      </nav>

      {/* Note Content Area */}
      <div className="editor-body">
        <input
          type="text"
          className="editor-title-input"
          placeholder="Category / Subtitle"
          value={note.title}
          onChange={(event) => updateActiveNote({ title: event.target.value })}
        />
        {/* <input
          type="text"
          className="editor-subtitle-input"
          placeholder="Title"
        /> */}
        <textarea
          className="editor-textarea"
          placeholder="Start typing your note..."
          value={note.content}
          style={{ fontSize: note.fontSize }}
          onChange={(event) =>
            updateActiveNote({ content: event.target.value })
          }
        />
      </div>
      {/* <Toolbar /> */}

      <div className="toolbar">
        <select
          className="font-size-select"
          value={note.fontSize}
          onChange={(e) => updateActiveNote({ fontSize: e.target.value })}
        >
          {FONT_SIZES.map((size) => {
            return (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            );
          })}
        </select>
        {/* <button className="format-btn bold">B</button> */}
        <div className="bg-swatches">
          {BACKGROUND_OPTIONS.map((bg) => {
            return (
              <button
                key={bg.id}
                type="button"
                title={bg.name}
                className={`swatch-btn ${note.bgImage?.id === bg.id ? "active" : ""}`}
                style={{
                  backgroundColor: bg.colorOrUrl.startsWith("url")
                    ? "#ffffff"
                    : bg.colorOrUrl,
                  backgroundImage: bg.colorOrUrl.startsWith("url")
                    ? bg.colorOrUrl
                    : "none",
                  backgroundSize: "300px auto",
                }}
                aria-label={`Change background to ${bg.name}`}
                onClick={() => updateActiveNote({ bgImage: bg })}
              />
            );
          })}
        </div>
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
