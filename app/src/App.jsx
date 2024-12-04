import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedRoute from "../src/Components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "../src/pages/home";
import Login from "../src/pages/login";
import Game from "../src/pages/game";
import Quiz from "./pages/quiz";
import CreateAccount from "./pages/createAccount";

import Navigation from "./components/Navigation";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
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
    </AuthProvider>
  );
}

export default App;
