import {TbClipboardCheck} from "react-icons/tb"
import { motion } from "framer-motion"
const Alert = ({ alert, setAlert}) => {
    if(!alert) return null;

    return (
        <motion.div
            role="alert"
            className="rounded-xl border absolute top-4 sm:left-[20%] md:left-[35%] border-gray-100 bg-white p-4 shadow-xl z-50"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
        >
            <div className="flex items-start gap-4">
                <TbClipboardCheck className="text-green-600 w-6 h-6" />

                <div className="flex-1">
                <strong className="block font-medium text-gray-900"> Copied to clipboard </strong>

                <p className="mt-1 text-sm text-gray-700">
                    <span
                        className="font-semibold"
                        style={{
                            color: alert === "#ffffff" ? "#000000" : alert,
                        }}
                    >{alert}</span> has been copied to your clipboard.
                </p>
                </div>

                <button
                    className="text-gray-500 transition hover:text-gray-600"
                    onClick={() => setAlert(null)}
                >
                <span className="sr-only">Dismiss popup</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </button>
            </div>
        </motion.div>
    )
} 

export default Alert