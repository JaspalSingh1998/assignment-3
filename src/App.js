import SignIn from "./screens/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import Navbar from "./screens/Navbar";
import News from "./screens/News";

function App() {
  return (
    <>
      <AuthContextProvider>
          <Router>
            <section className="flex">
              <Navbar/>
              <Routes>
                <Route exact path="/"  element={
                  <ProtectedRoutes>
                    <Home />
                  </ProtectedRoutes>
                }/>
                <Route exact path="/news" element={
                  <ProtectedRoutes>
                    <News />
                  </ProtectedRoutes>
                } />
                <Route exact path="/signin"  element={<SignIn />}/>
                <Route exact path="/signup"  element={<SignUp />}/>
              </Routes>
            </section>
          </Router>
      </AuthContextProvider>
    </>
    
  );
}

export default App;
