import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './Pages/SignUp';
import DashBoard from './Pages/DashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
