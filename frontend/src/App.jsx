import React from "react";
import Nav from "./components/Nav";
import Routing from "./utils/Routing";


const App = () => {
  return (
    <div className="app min-h-full w-full relative">
      <Nav />

      <Routing />
    </div>
  );
};

export default App;
