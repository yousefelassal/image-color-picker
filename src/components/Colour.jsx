import { motion } from "framer-motion"
const Colour = ({ color, handleCopyColor }) => 
    <div className="mt-8 flex flex-col gap-2">
        <motion.button
            className="px-4 py-2 rounded-2xl shadow-md h-32"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyColor}
            style={{
            backgroundColor: color,
            }}
        >
            <span
                style={{
                color:
                    color === "#ffffff" ? "#000000" : "#FFFFFF",
                }}
            >
                {color}
            </span>
        </motion.button>
    </div>

export default Colour