import React from 'react';
import { CollectionPoint } from '../lib/types';
import { collectionPoints } from '../lib/seed-data';
import Image from 'next/image';

// CollectionPointCard component
const CollectionPointCard: React.FC<{ point: CollectionPoint }> = ({ point }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <Image 
      src={point.images[0]} 
      alt={point.name} 
      className="w-full h-48 object-cover"
      width={400}
      height={200}
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{point.name}</h2>
      <p className="text-gray-600 mb-2">{point.location}</p>
      <p className="text-sm text-gray-500">
        Coordinates: {point.coordinates.latitude}, {point.coordinates.longitude}
      </p>
    </div>
  </div>
);

// CollectionPointsList component
const CollectionPointsList: React.FC<{ collectionPoints: CollectionPoint[] }> = ({ collectionPoints }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Collection Points</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collectionPoints.map((point) => (
          <CollectionPointCard key={point.id} point={point} />
        ))}
      </div>
    </div>
  );
};

// Main Page component
const CollectionPointsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <CollectionPointsList collectionPoints={collectionPoints} />
    </div>
  );
};

export default CollectionPointsPage;