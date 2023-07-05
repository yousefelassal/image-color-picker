import { motion } from "framer-motion";

const FileInput = ({label, handleFile}) => {
    return (
        <div className="flex-col mt-6 flex gap-2 justify-center">
            <label htmlFor="img" className="text-[#8D8FD2]">{label}</label>
          <div className="bg-[#2F2D36] px-4 py-2 rounded-2xl shadow-md">
            <motion.div 
              className="bg-[#655E79] rounded-full w-32 hover:bg-[#72698c] hover:cursor-pointer shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <input
                id="img" type="file" className="text-[#84849D] text-sm text-grey-500
                file:mr-5 file:py-2 file:px-6
                file:rounded-full file:border-0 file:font-semibold
                file:text-sm hover:cursor-pointer file:hover:cursor-pointer
                file:bg-clip-text file:text-transparent file:bg-gradient-to-r file:from-[#DACEFF] file:to-[#C6B5FF]
                " accept="image/*"
                onChange={handleFile}
              />
            </motion.div>
          </div>
        </div>
    )
}

export default FileInput;