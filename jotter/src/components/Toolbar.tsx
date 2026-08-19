import { BACKGROUND_OPTIONS } from "../constants/backgrounds";
import { FONT_SIZES } from "../constants/fontSizes";
import { useNotes } from "../context/NotesContext";

export default function Toolbar() {
  const { updateActiveNote } = useNotes();

  return (
    <div className="toolbar">
      <select
        className="font-size-select"
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
          return <button key={bg.id} title={bg.name} />;
        })}
      </div>
      <button className="sticker-picker-btn">
        <img src="/sticker-rocket.png" alt="Stickers" />
      </button>
    </div>
  );
}
