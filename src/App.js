import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Data from "./components/Data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;
