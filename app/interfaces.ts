export interface Item {
  _id: string;
  title: {
    de: string;
    en: string;
  };
  image: string;
  sqm: number;
  beds: number;
  price: number;
}

export interface WowData {
  listings: Item[];
}
