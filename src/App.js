import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://project-management-app-server.onrender.com/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul className="App">
      {data && data.map((project) => <li key={project.id}>{project.title}</li>)}
    </ul>
  );
}

export default App;
