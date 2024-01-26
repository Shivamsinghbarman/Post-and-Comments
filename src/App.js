import HomePage from './pages/HomePage';
import CreateAccount from './pages/CreateAccount';
import Otp from './pages/Otp.js';
import Success from './pages/Success.js';
import Dashboard from './pages/Dashboard.js';
import Addpost from './pages/Addpost.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from './pages/Error.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/addpost" element={<Addpost/>}/>
        <Route path="/createacc" element={<CreateAccount/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
