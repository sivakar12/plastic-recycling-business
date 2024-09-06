import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import clientPromise from '../lib/mongodb';
import { Db } from 'mongodb';
import { CollectionPoint } from '@/lib/types';

const collectionPoints: CollectionPoint[] = [
  {
    id: "1",
    name: "Recycling Center",
    location: "123 Main St",
    coordinates: {
      latitude: 40.7128,
      longitude: -74.0060,
    },
    images: ["/sample-images/collection-point-1.jpg"],
  },
  {
    id: "2",
    name: "Compost Drop Off",
    location: "456 Elm St",
    coordinates: {
      latitude: 40.7128,
      longitude: -74.0060,
    },
    images: ["/sample-images/collection-point-3.jpg"],
  },
  {
    id: "3",
    name: "Landfill",
    location: "789 Oak St",
    coordinates: {
      latitude: 40.7128,
      longitude: -74.0060,
    },
    images: ["/sample-images/collection-point-2.jpg"],
  },
];

async function seedCollectionPoints() {
  try {
    const client = await clientPromise;
    const db: Db = client.db(process.env.MONGODB_DB);

    // Clear existing collection points
    await db.collection('collectionPoints').deleteMany({});

    // Insert new collection points
    const result = await db.collection('collectionPoints').insertMany(collectionPoints);

    console.log(`${result.insertedCount} collection points inserted`);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
}

seedCollectionPoints();