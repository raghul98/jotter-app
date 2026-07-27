export default function Toolbar() {
  return (
    <div className="toolbar">
      <select className="font-size-select">
        <option value="14pt">14pt</option>
      </select>
      <button className="format-btn bold">B</button>
      <button className="sticker-picker-btn">
        <img src="/sticker-rocket.png" alt="Stickers" />
      </button>
    </div>
  );
}
