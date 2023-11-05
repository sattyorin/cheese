export interface Sento {
  distance: number;
  ganban: boolean;
  imageUrl: string[];
  latitude: number;
  name: string;
  sauna: boolean;
  longitude: number;
  tennen: boolean;
}

export interface Coupon {
  genre: number;
  rank: number;
  title: string;
}

export interface Restaurant {
  alcohol: boolean;
  distance: number;
  imageUrl: string[];
  latitude: number;
  name: string;
  genre: number;
  longitude: number;
}

export interface Itinerary {
  userId: string;
  sento: Sento;
  restaurant: Restaurant;
  pub: number;
}
