import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      {/* navigates to home page (element component) via the given 'path' */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
