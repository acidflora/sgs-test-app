import Home from "./components/routes/Home";
import NavBar from "./components/bar/NavBar";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import ContentCard from "./components/ui/ContentCard";

import Task1 from "./components/tasks/Task1";
import Task2 from "./components/tasks/Task2";
import Task3 from "./components/tasks/Task3";
import Task4 from "./components/tasks/Task4";
import Task5 from "./components/tasks/Task5";
import Task6 from "./components/tasks/Task6";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/action/2.1", element: <Task1 /> },
    { path: "/action/2.2", element: <Task2 /> },
    { path: "/action/2.3", element: <Task3 /> },
    { path: "/action/2.4", element: <Task4 /> },
    { path: "/action/3.1", element: <Task5 /> },
    { path: "/action/3.2", element: <Task6 /> },
    // ...
  ]);
  return (
    <div>
      <NavBar />
      <ContentCard>{routes}</ContentCard>
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
