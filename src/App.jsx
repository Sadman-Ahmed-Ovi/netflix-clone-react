import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Account from "./pages/Account"
import { AuthContextProvider } from "./context/AuthContext"
import { MovieContextProvider } from "./context/MovieContext"
import ProtectedRoute from "./components/ProtectedRoute"
import MovieDetail from "./pages/MovieDetail"



function App() {
 
  
  return (
    <>
      <MovieContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path="/movieDetail" element={<MovieDetail />} />
          </Routes>
        </AuthContextProvider>
      </MovieContextProvider>
    </>
  );
}

export default App
