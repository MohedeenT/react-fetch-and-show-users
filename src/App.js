import "./styles.css";
import GetUsers from "./components/GetUsers";

export default function App() {
  return (
    <div id="app">
      <h1>List of users</h1>
      <div className="container">
        <div className="users row">
          <GetUsers />
        </div>
      </div>
    </div>
  );
}
