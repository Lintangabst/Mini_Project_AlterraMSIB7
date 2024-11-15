// components/WaterButton.tsx
import React from 'react';

interface WaterButtonProps {
  water: () => void;
}

const WaterButton: React.FC<WaterButtonProps> = ({ water }) => {
  return (
    <button
      onClick={water}
      className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600"
    >
      Water Plant
    </button>
  );
};

export default WaterButton;
