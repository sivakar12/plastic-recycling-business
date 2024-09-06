import { CollectionPoint } from "./types";

export const collectionPoints: CollectionPoint[] = [
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