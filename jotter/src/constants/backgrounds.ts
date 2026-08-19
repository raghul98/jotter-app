import type { Background } from "../context/NotesContext";
import gridImg from "../assets/grid.jpg";
import dottedImg from "../assets/dotted.jpg";
import oldPaperImg from "../assets/old-paper.jpg";

export const BACKGROUND_OPTIONS: Background[] = [
  { id: "white", name: "Clean White", colorOrUrl: "#ececec" },
  { id: "yellow", name: "Sticky Yellow", colorOrUrl: "#fef08a" },
  { id: "grid", name: "Grid Paper", colorOrUrl: `url(${gridImg})` },
  { id: "dotted", name: "Dotted Paper", colorOrUrl: `url(${dottedImg})` },
  { id: "old-paper", name: "Old Paper", colorOrUrl: `url(${oldPaperImg})` },
];
