import React from "react";
import confetti from "canvas-confetti";
const FloatingButton = ({ onClick, label, icon }) => {
    const handleClick = (e) => {
        if (onClick) onclick(e);
        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }
        confetti({
            angle: randomInRange(55, 125),
            spread: randomInRange(90, 150),
            particleCount: randomInRange(60, 100),
            origin: { y: 1 },
        });
    };
    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center gap-2"
        >
            {label}
            {icon && (
                <img
                    className="w-10 h-10 object-contain rotate-y-180 cursor-pointer"
                    src={icon}
                    alt="Tyrannosaurus icon"
                />
            )}
        </button>
    );
};
export default FloatingButton;
