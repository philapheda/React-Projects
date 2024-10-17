import "./App.css";
import logo from "./assets/logo.png";
function App() {
  return (
    <div className="whole">
      <div className="header">
        <img src={logo} />
      </div>
      <div className="body">
        <h2>Fun fact about React</h2>
        <ul>
          <li>
            <p>was first released in 2013</p>
          </li>
          <li>
            <p>was orginally created by Jordan Walke</p>
          </li>
          <li>
            <p>Has well over 200K stars on GitHub</p>
          </li>
          <li>
            <p>Is maintained by Meta</p>
          </li>
          <li>
            <p>Powers thousands of enterprise apps, including mobile apps</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
