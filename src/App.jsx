import { Outlet } from "react-router-dom";
import HomePage from "./components/HomePage";

// App.jsx just puts together components like HomePage and Footer etc
function App() {
  return (
    <div>
      <HomePage />
      {/* Outlet renders children path */}
      <Outlet />
    </div>
  );
}

export default App;
