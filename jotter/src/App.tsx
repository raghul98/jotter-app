import "./App.css";
import { NoteEditor } from "./components/NoteEditor";
import NotesList from "./components/NotesList";
import { useNotes } from "./context/NotesContext";

function App() {
  const { activeView, setActiveView, notes, createNewNote, activeNote } =
    useNotes();
  return (
    <div className="app-container">
      {/* Global Header */}
      {activeView !== "editor" && (
        <header className="app-header" onClick={() => setActiveView("home")}>
          <h1>JOTTER</h1>
        </header>
      )}

      {/* Main Content Area */}
      <main className="main-content">
        {activeView === "home" && (
          <div className="notebook-cover">
            <div className="cover-title">
              <h2>AARON'S NOTEBOOK</h2>
            </div>
            <button className="open-btn">OPEN</button>
          </div>
        )}
        {activeView === "list" && <NotesList notes={notes} />}
        {activeView === "editor" && activeNote && (
          <NoteEditor note={activeNote} />
        )}
      </main>

      {/* Bottom Floating Action Bar */}
      {activeView === "list" && (
        <footer className="action-bar">
          <button className="add-note-btn" onClick={createNewNote}>
            <span className="plus-icon">+</span>
            <span>ADD NOTE</span>
          </button>
        </footer>
      )}
    </div>
  );
}

export default App;
