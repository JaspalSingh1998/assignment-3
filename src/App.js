import SignIn from "./screens/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import Navbar from "./screens/Navbar";
import News from "./screens/News";
import Weather from "./screens/Weather";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Colors from "./screens/Colors";

function App() {
  return (
    <>
      <AuthContextProvider>
          <Router>
            <section className="flex">
            <Navbar />
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
                <Route exact path="/weather" element={
                  <ProtectedRoutes>
                    <Weather />
                  </ProtectedRoutes>
                } />
                <Route exact path="/colors" element={
                  <ProtectedRoutes>
                    <Colors />
                  </ProtectedRoutes>
                } />
                <Route exact path="/signin"  element={<SignIn />}/>
                <Route exact path="/signup"  element={<SignUp />}/>
              </Routes>
            </section>
          </Router>
      </AuthContextProvider>
      <ToastContainer />
    </>
    
  );
}

export default App;
