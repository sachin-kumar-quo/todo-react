import "./App.css";
import Todos from "./Todos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CreateTodo from "./Todos/CreateTodo";
import EditTodo from "./Todos/EditTodo";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="create" element={<CreateTodo />} />
        <Route path="edit/:id" element={<EditTodo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
