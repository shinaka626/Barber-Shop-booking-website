
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // duration in minutes
  image?: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: "haircut",
    name: "Classic Haircut",
    description: "Precision haircut tailored to your style, includes consultation, wash, and styling.",
    price: 25,
    duration: 30,
    popular: true
  },
  {
    id: "beard-trim",
    name: "Beard Trim & Shape",
    description: "Expert beard trimming and shaping to enhance your facial features.",
    price: 15,
    duration: 20,
    popular: true
  },
  {
    id: "hot-towel-shave",
    name: "Hot Towel Shave",
    description: "Traditional hot towel shave with premium products for a smooth finish.",
    price: 30,
    duration: 30
  },
  {
    id: "hair-color",
    name: "Hair Color",
    description: "Professional hair coloring service using quality products.",
    price: 45,
    duration: 60
  },
  {
    id: "haircut-beard-combo",
    name: "Haircut & Beard Combo",
    description: "Complete grooming package with haircut and beard trim.",
    price: 35,
    duration: 45,
    popular: true
  },
  {
    id: "kids-haircut",
    name: "Kids Haircut",
    description: "Gentle and friendly haircuts for children under 12.",
    price: 18,
    duration: 25
  },
  {
    id: "head-massage",
    name: "Head Massage",
    description: "Relaxing scalp massage to stimulate blood flow and reduce stress.",
    price: 20,
    duration: 20
  },
  {
    id: "facial",
    name: "Men's Facial",
    description: "Deep cleansing facial treatment designed specifically for men's skin.",
    price: 40,
    duration: 40
  }
];
