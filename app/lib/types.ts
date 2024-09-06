export type CollectionPoint = {
  id: string;
  name: string;
  location: string;
  coordinates: {
    latitude: number;
    longitude: number;
  }
  description?: string;
  images: string[];
  
};