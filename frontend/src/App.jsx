import AnimatedCursor from "react-animated-cursor";
import Background from "./components/UI/Background";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage"

import { Routes, Route } from "react-router-dom";
import Entry from "./components/Entry";
import EntryView from "./components/EntryView";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/entry/:slug" element={<EntryView />} />
      </Routes>

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
