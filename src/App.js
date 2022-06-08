import "./App.css";
import FunctionTestingDemo from "./components/FunctionTestingDemo";
import MyApp from "./components/MyApp";
import TodoList from "./components/TodoList";
import UserList from "./components/User/UserList";

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
      {/* <FunctionTestingDemo /> */}

      {/* Redux saga another demo with test cases covered */}
      <UserList />
    </div>
  );
}

export default App;
