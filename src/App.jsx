import React from "react";
import TodoContainer from "./components/TodoContainer";
import ParticlesBg from "./components/ParticlesBg";

const App = () => {
  return (
    <div className="flex justify-center relative items-center h-[100vh]">
      <ParticlesBg />
      <TodoContainer />
    </div>
  );
};

export default App;
