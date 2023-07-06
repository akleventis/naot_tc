export interface WorkshopItem {
  title: string;
  heading: string;
  img: string;
  location: string;
  date: string;
  time: string;
  datetime: string;
  fee: string;
  overview: {
    title: string;
    body: string;
  };
  learning: {
    title: string;
    items: string[];
  };
  topics: {
    title: string;
    items: string[];
  };
  certs: {
    title: string;
    items: string[];
  };
  faculty: {
    title: string;
    body: string;
  };
  hotel: {
    title: string;
    body: string;
  };
  register: {
    title: string;
    body: string;
    buy_id: string;
    buy_key: string;
  };
  venue: {
    title: string;
    iframe_url: string;
    maps_url: string;
  };
  address: {
    name: string;
    street: string;
    city_state_zip: string;
  };
  sponsor: {
    title: string;
    img: string;
    url: string;
  };
  cancellation: {
    title: string;
    body: string;
  };
}

export interface WorkshopData {
  items: WorkshopItem[];
}
