import { useState } from "react";
import FileInput from "./components/FileInput";
import Eyedropper from "./components/Eyedropper";

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
      <div className="bg-[#1b1b1f] img-col">
        { image ? (
          <>
            <img src={image} alt="image" />
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </>
        ) : ( 
          <svg
            stroke="currentColor"
            fill="#DFE0FB"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="4em"
            width="4em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"></path>
            <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"></path>
          </svg>
        )}
      </div>
    </div>
  );
}

export default App;