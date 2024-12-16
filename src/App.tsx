import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Users from "./pages/Users";
import Header from "./components/Header";
import CreateUser from "./pages/CreateUser";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
      </Router>
    </UserProvider>

  );
};

export default App;
