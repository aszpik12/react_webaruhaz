import "./App.css";
import Kep from "./komponensek/Kep";
import { Lista } from "./Lista";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Webáruház</h1>
      </header>
      <article>
        new Termekek(".article")
      </article>
      <footer>Petrovai Asztrik Örs</footer>
    </div>
  );
}

export default App;
