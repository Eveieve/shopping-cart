import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      {/* Outlet renders children path */}
      <Outlet />
    </div>
  );
}

export default App;
