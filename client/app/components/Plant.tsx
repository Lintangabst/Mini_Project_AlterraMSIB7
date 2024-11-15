// components/Plant.tsx
import React from 'react';
import WaterButton from './WaterButton';

interface PlantProps {
  id: number;
  level: number;
  waterPlant: (id: number) => void;
}

const Plant: React.FC<PlantProps> = ({ id, level, waterPlant }) => {
  // Menentukan ukuran dan tampilan tanaman berdasarkan level
  const plantSize = level * 20;

  return (
    <div className="flex flex-col items-center">
      <div
        style={{ height: `${plantSize}px`, width: `${plantSize}px` }}
        className="transition-all duration-300"
      >
        <img src="./img/plant1.png" alt="Plant" className="object-contain" />
      </div>
      <WaterButton water={() => waterPlant(id)} />
      <p className="text-sm mt-2 text-gray-600">Level: {level}</p>
    </div>
  );
};

export default Plant;
