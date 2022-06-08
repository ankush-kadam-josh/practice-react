import "./App.css";
import FunctionTestingDemo from "./components/FunctionTestingDemo";
import MyApp from "./components/MyApp";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      {/* Redux saga demo */}
      {/* <MyApp /> */}

      {/* <hr></hr> */}

      {/* To get immer library demo have a look at this TODO component */}
      {/* <TodoList /> */}

      {/* <hr></hr> */}

      {/* functional testing */}
      <FunctionTestingDemo />
    </div>
  );
}

export default App;
