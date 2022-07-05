// import Routes, Route, Link
import { Routes, Route } from "react-router-dom";

import "./css/App.css";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App container">
      {/* app routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* app routes */}
    </div>
  );
}

export default App;
