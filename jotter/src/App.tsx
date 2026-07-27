import "./App.css";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="app-container">
      {/* Global Header */}
      <header className="app-header">
        <h1>JOTTER</h1>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {/* --- VIEW 1: HOME COVER VIEW --- */}
        <div className="notebook-cover">
          <div className="cover-title">
            <h2>AARON'S NOTEBOOK</h2>
          </div>
          <button className="open-btn">OPEN &rarr;</button>
        </div>

        <NotesList />
      </main>

      {/* Bottom Floating Action Bar */}
      <footer className="action-bar">
        <button className="add-note-btn">
          <span className="plus-icon">+</span>
          <span>ADD NOTE</span>
        </button>
      </footer>
    </div>
  );
}

export default App;
