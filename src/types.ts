export interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
}

export interface Ingredient {
  id: number;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
}

export interface Combo {
  id: number;
  buy: number;
  free: number;
  isBestSeller: boolean;
  savingsPercent?: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface PainPoint {
  id: number;
  text: string;
  icon: string;
}
