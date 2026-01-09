
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
}

export interface Package {
  name: string;
  tests: string[];
  price: string;
  originalPrice: string;
  badge?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}