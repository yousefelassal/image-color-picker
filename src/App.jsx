import { useState } from "react";
import FileInput from "./components/FileInput";
import Eyedropper from "./components/Eyedropper";

const App = () => {
  const [color, setColor] = useState("#DFE0FB");
  const [imgae, setImage] = useState(null);

  return (
    <div className="container">
      <div className="flex flex-col bg-[#121215] p-4 border-r border-r-neutral-800 col-shadow">
        <div className="flex gap-1 items-center">
          <img src="/favicon.svg" alt="logo" width="32px"/>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent hover:cursor-default bg-gradient-to-tr from-[#DFE0FB] to-[#8D8FD2]">ColourPicker</h1>
        </div>
          <FileInput label="Upload Image"/>
          <Eyedropper color={color} setColor={setColor}/>
      </div>
      <div className="bg-[#1b1b1f]">

      </div>
    </div>
  );
}

export default App;