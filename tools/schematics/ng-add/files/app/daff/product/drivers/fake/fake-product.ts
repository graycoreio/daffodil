export interface FakeProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: FakeRating;
}

export interface FakeRating {
  rate: number;
  count: number;
}
