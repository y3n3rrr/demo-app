import "./App.css";
import Login from "./pages/Login";
import LoginWithHook from "./pages/LoginWithHook";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'


function App() {
  return (
    <div className="App">  
    <Header />
      <Routes>
        <Route path="/" element={<LoginWithHook title="Test Title!"  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
