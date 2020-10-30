import React from "react";
import Navbar from "./Navbar";
import Notes from "./Notes";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Notes />
    </div>
  );
}

export default App;
