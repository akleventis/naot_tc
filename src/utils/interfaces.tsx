export interface SharedData {
  title: {
    lg: string;
    sm: string;
  }
  main: {
    history_title: string;
    history_body: string;
    statement_title: string;
    statement_body: string;
    events_title: string;
  }
  contact: {
    title: string,
    body: string;
    email: string;
  }
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

export interface BoardMember {
  name: string;
  title: string;
  email: string;
}

export interface BoardMembers {
  title: string,
  members: BoardMember[];
}

export interface WorkshopItem {
  title: string;
  heading: string;
  img: string;
  location: string;
  date: string;
  time: string;
  register: {
    title: string;
    body: string;
    note: string;
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
}

export interface WorkshopData {
  items: WorkshopItem[];
}
