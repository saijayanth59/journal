import AnimatedCursor from "react-animated-cursor";
import Background from "./components/UI/Background";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";
import Entry from "./components/Entry";
import EntryView from "./components/EntryView";
import { AuthContextProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <Toaster></Toaster>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/entry"
            element={
              <ProtectedRoute>
                <Entry />
              </ProtectedRoute>
            }
          />
          <Route
            path="/entry/:slug"
            element={
              <ProtectedRoute>
                <EntryView />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>

      <Background />
      <AnimatedCursor
        innerSize={14}
        outerSize={8}
        color="140, 100, 255"
        outerAlpha={0.5}
      />
    </>
  );
}

export default App;
