import { useState } from "react";
import FileInput from "./components/FileInput";
import Eyedropper from "./components/Eyedropper";
import Image from "./components/Image";

const App = () => {
  const [color, setColor] = useState("#DFE0FB");
  const [image, setImage] = useState(null);

  const openEyedropper = async () => {
    let eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    setColor(sRGBHex);
  };

  const handleFile = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="container">
      <div className="flex flex-col bg-[#121215] p-4 border-r border-r-neutral-800 col-shadow">
        <div className="flex gap-1 items-center">
          <img src="/favicon.svg" alt="logo" width="32px"/>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent hover:cursor-default bg-gradient-to-tr from-[#DFE0FB] to-[#8D8FD2]">ColourPicker</h1>
        </div>
          <FileInput label="Upload Image" handleFile={handleFile}/>
          <Eyedropper openEyedropper={openEyedropper}/>
      </div>
        <Image image={image} />
    </div>
  );
}

export default App;