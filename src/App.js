import "./App.css";
import MyApp from "./components/MyApp";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      {/* Redux saga demo */}
      <MyApp />

      <hr></hr>

      {/* To get immer library demo have a look at this TODO component */}
      <TodoList />
    </div>
  );
}

export default App;
