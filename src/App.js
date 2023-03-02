import { useState } from "react";
import SignIn from "./screens/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import ProtectedRoutes from "./Routes/ProtectedRoutes";

function App() {
  const [userr, setUser] = useState();

  const user = UserAuth();
  console.log(user);

  return (
    <>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route exact path="/"  element={
              <ProtectedRoutes user={userr}>
                <Home />
              </ProtectedRoutes>
            }/>
            <Route exact path="/signin"  element={<SignIn />}/>
            <Route exact path="/signup"  element={<SignUp />}/>
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
    
  );
}

export default App;
