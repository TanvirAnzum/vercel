import { useGetPostsQuery } from "./api";
import "./App.css";

function App() {
  const { data } = useGetPostsQuery();

  return (
    <ul className="App">
      {data && data.map((project) => <li key={project.id}>{project.title}</li>)}
    </ul>
  );
}

export default App;
