import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
