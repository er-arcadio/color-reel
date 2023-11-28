import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Red from "./components/Red";

function App() {
  return (
    <Routes>
      {/* navigates to home page (element component) via the given 'path' */}
      <Route path="/" element={<Home />} />
      <Route path="/red" element={<Red />} />
    </Routes>
  );
}

export default App;
