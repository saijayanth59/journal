import AnimatedCursor from "react-animated-cursor";
import Background from "./components/UI/Background";
import Login from "./components/Login";
import Register from "./components/Register";
import Entry from "./components/Entry";
import EntryView from "./components/EntryView";

function App() {
  return (
    <>
      <Background />
      {/* <AnimatedCursor
        innerSize={14}
        outerSize={8}
        color="140, 100, 255"
        outerAlpha={0.5}
      /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Entry /> */}
      <EntryView />
    </>
  );
}

export default App;
