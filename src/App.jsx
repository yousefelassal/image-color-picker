import { useEffect, useState } from "react";
import FileInput from "./components/FileInput";
import Eyedropper from "./components/Eyedropper";
import Image from "./components/Image";
import Colour from "./components/Colour";
import Alert from "./components/Alert";

const App = () => {
  const [color, setColor] = useState("#dfe0fb");
  const [image, setImage] = useState(null);
  const [allColors, setAllColors] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  }, [alert]);

  const openEyedropper = async () => {
    let eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    setColor(sRGBHex);
    setAllColors([...allColors, sRGBHex]);
  };

  const handleFile = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCopyColor = async (color) => {
    await navigator.clipboard.writeText(color);
    setAlert(color);
  };

  return (
    <>
    <Alert alert={alert} setAlert={setAlert}/>
    <div className="container">
      <div className="flex flex-col bg-[#121215] p-4 border-r border-r-neutral-800 col-shadow">
        <div className="flex gap-1 items-center">
          <img src="/favicon.svg" alt="logo" width="32px"/>
          <h1 className="text-2xl font-bold">ColourPicker</h1>
        </div>
          <FileInput label="Upload Image" handleFile={handleFile}/>
          <Eyedropper openEyedropper={openEyedropper}/>
          <Colour color={color} handleCopyColor={handleCopyColor} allColors={allColors} setColor={setColor} />
      </div>
        <Image image={image} />
    </div>
    </>
  );
}

export default App;