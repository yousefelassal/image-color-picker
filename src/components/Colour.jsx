import { motion } from "framer-motion"
const Colour = ({ color, handleCopyColor, allColors }) =>  
<>
    <div className="mt-8 flex flex-col gap-4">
    <h2 className="text-[#8D8FD2] -mb-2">Click to Copy</h2>
    <motion.button
            className="px-4 py-2 rounded-2xl shadow-md h-24"
            animate={{
                backgroundColor: color,
                outlineColor: `${color}cc`
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCopyColor(color)}
            style={{
            backgroundColor: color,
            outline: `dashed 2px ${color}cc`
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
        <div className="flex flex-wrap gap-2">
        {
            allColors.map((color, index) => (
                <div className="relative wrapper" key={index}>
                    <motion.button
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>handleCopyColor(color)}
                        className="rounded-full shadow-md h-8 w-8 peer"
                        style={{
                            backgroundColor: color,
                        }}
                    />
                    <div 
                        className="absolute bottom-[3.2rem] left-0 color-popover invisible z-10 inline-block w-18 px-4 py-2 text-sm bg-[#2f2d36] border border-[#25242b] rounded-lg shadow-sm peer-hover:visible"
                        style={{
                            color: color === "#2f2d36" ? "#ffffff" : color,
                        }}
                    >
                        {color}
                    </div>
                </div>
            ))
            }
        </div>
    </div>
</>

export default Colour