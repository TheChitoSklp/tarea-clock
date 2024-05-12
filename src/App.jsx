import "./App.css";
import { Clock } from "./components/Clock";

function App() {
  return (
    <div className="App">
      <Clock timezone="America/Mexico_City" />
    </div>
  );
}

export default App;
