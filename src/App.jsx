import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#DFE0FB");
  const [imgae, setImage] = useState(null);

  return (
    <div className="container">
      <div className="flex flex-col bg-[#121215] p-2">
        <div className="flex gap-1 items-center">
          <img src="/favicon.svg" alt="logo" width="32px"/>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent hover:cursor-default bg-gradient-to-tr from-[#DFE0FB] to-[#8D8FD2]">Picker</h1>
        </div>
      </div>
      <div className="bg-[#313143]">

      </div>
    </div>
  );
}

export default App;