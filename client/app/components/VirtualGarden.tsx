'use client'
import React, { useState } from 'react';
import Plant from './Plant';
import WaterButton from './WaterButton';

const VirtualGarden: React.FC = () => {
  const [plants, setPlants] = useState([{ id: 1, level: 1 }]);

  // Fungsi untuk menambahkan tanaman baru
  const addPlant = () => {
    setPlants([...plants, { id: plants.length + 1, level: 1 }]);
  };

  // Fungsi untuk meningkatkan level tanaman (penyiraman)
  const waterPlant = (id: number) => {
    setPlants(plants.map(plant => 
      plant.id === id ? { ...plant, level: plant.level + 1 } : plant
    ));
  };

  return (
    <section className="bg-green-50 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Your Virtual Garden</h2>
        <p className="text-gray-700 mb-6">
          Plant and grow trees as you complete math exercises!
        </p>
        <button
          onClick={addPlant}
          className="bg-green-600 text-white px-4 py-2 rounded-md mb-8 hover:bg-green-700"
        >
          Add a New Plant
        </button>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <Plant key={plant.id} id={plant.id} level={plant.level} waterPlant={waterPlant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualGarden;
