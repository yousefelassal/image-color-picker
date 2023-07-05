import { useState } from "react";
import FileInput from "./components/FileInput";

const App = () => {
  const [color, setColor] = useState("#DFE0FB");
  const [imgae, setImage] = useState(null);

  return (
    <div className="container">
      <div className="flex flex-col bg-[#121215] p-4">
        <div className="flex gap-1 items-center">
          <img src="/favicon.svg" alt="logo" width="32px"/>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent hover:cursor-default bg-gradient-to-tr from-[#DFE0FB] to-[#8D8FD2]">ColourPicker</h1>
        </div>
          <FileInput label="Upload Image"/>
      </div>
      <div className="bg-[#2F2D36]">

      </div>
    </div>
  );
}

export default App;