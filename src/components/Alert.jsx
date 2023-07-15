import {TbClipboardCheck} from "react-icons/tb"
const Alert = ({color, alert}) => {
    if(!alert) return null;

    return (
        <div
            role="alert"
            className="rounded-xl border absolute top-4 left-[35%] border-gray-100 bg-white p-4 shadow-xl z-50"
        >
            <div className="flex items-start gap-4">
                <TbClipboardCheck className="text-green-600 w-6 h-6" />

                <div className="flex-1">
                <strong className="block font-medium text-gray-900"> Copied to clipboard </strong>

                <p className="mt-1 text-sm text-gray-700">
                    <span
                        style={{
                            color: color === "#ffffff" ? "#000000" : color,
                        }}
                    >{color}</span> has been copied to your clipboard.
                </p>
                </div>

                <button className="text-gray-500 transition hover:text-gray-600">
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
        </div>
    )
} 

export default Alert