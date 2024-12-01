import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by <a href="https://github.com/Helen-MLT">Hélèna Milletti</a>,
            open sourced on{" "}
            <a href="https://github.com/Helen-MLT/dictionary-project">Github</a>{" "}
            and hosted on{" "}
            <a href="https://dictionary-byhelen.netlify.app/">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
