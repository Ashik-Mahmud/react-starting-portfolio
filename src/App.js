import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import { Header } from "./components/Header/Header";
import { About } from "./components/pages/About";
import { Error } from "./components/pages/Error";
import { Home } from "./components/pages/Home";
import { Users } from "./components/pages/Users";
function App() {
  return (
   <>
   <Router>
       <Header />
        <Routes>
            <Route path="/"element={ <Home /> } />
            <Route path="/About"element={ <About /> } />
            <Route path="/Users/:name"element={ <Users /> } />
            <Route path="*" element={<Error />} />
        </Routes>
   </Router>
   </>
  );
}

export default App;
