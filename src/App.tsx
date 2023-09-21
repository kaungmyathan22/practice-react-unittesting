import "./App.css";
import { Counter } from "./counter/Counter";
import { MuiMode } from "./mui/MUIMode";
import { AppProviders } from "./providers/AppProvider";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={["html", "css", "javascript", "react"]} /> */}
        <Counter />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
