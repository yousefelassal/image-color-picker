import { motion } from "framer-motion"

const Eyedropper = ({ color, setColor }) => {
    return (
        <div className="mt-8 flex flex-col gap-2">
            <h2 className="text-[#8D8FD2]">Pick Colour</h2>
            <motion.button 
                className="flex items-center gap-2 bg-[#655E79] rounded-2xl px-4 py-2 shadow-md hover:bg-[#72698c] group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div 
                    className="flex gap-1 items-center w-10 h-10 justify-center p-[0.65rem] bg-[#2F2D36] group-hover:bg-[#454350] rounded-xl shadow-sm"
                >
                <img src="src/assets/eyedropper.svg" alt="eyedropper" width="30px"/>
                </motion.div>
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#DACEFF] to-[#C6B5FF] font-semibold">Open Eyedropper</h2>
            </motion.button>
        </div>
    )
}

export default Eyedropper