import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import { About } from "./components/pages/About";
import { Home } from "./components/pages/Home";
import { Users } from "./components/pages/Users";
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
       <Route path="/"element={ <Home /> } />
       <Route path="/src/components/pages/About"element={ <About /> } />
       <Route path="/src/components/pages/Users"element={ <Users /> } />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
