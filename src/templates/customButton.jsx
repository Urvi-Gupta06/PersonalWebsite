import React from "react";

const CustomButton = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition duration-300  dark:bg-pink-500 dark:hover:bg-pink-600 dark:text-white"
        >
            {label}
        </button>
    );
};

export default CustomButton;
