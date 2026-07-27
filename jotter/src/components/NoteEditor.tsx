import Toolbar from "./Toolbar";

export function NoteEditor() {
  return (
    <div className="editor-container">
      {/* Top Header Navigation */}
      <nav className="editor-nav">
        <button className="back-btn">&larr; Back</button>
      </nav>

      {/* Note Content Area */}
      <div className="editor-body">
        <input
          type="text"
          className="editor-title-input"
          placeholder="Category / Subtitle"
        />
        {/* <input
          type="text"
          className="editor-subtitle-input"
          placeholder="Title"
        /> */}
        <textarea
          className="editor-textarea"
          placeholder="Start typing your note..."
        />
      </div>
      <Toolbar />

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
