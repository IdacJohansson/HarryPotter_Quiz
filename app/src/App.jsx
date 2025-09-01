import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedRoute from "../src/components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { MusicProvider } from "./contexts/MusicContext";

import Home from "../src/pages/home";
import Login from "../src/pages/login";
import Game from "../src/pages/game";
import Quiz from "./pages/quiz";
import CreateAccount from "./pages/createAccount";

function App() {
  return (
    <AuthProvider>
      <MusicProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/quiz"
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              }
            />
            <Route
              path="/game"
              element={
                <ProtectedRoute>
                  <Game />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </MusicProvider>
    </AuthProvider>
  );
}

export default App;
