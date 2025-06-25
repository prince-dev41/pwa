export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  price: string;
  category: string;
  organizer: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Concert de Jazz en plein air",
    description: "Venez profiter d'une soirée de jazz exceptionnel dans le parc central de la ville avec des artistes renommés.",
    date: "2025-07-15",
    time: "20:00",
    location: "Parc Central, Paris",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
    price: "25€",
    category: "Musique",
    organizer: "Jazz Festival Paris"
  },
  {
    id: "2",
    title: "Conférence Tech Innovation",
    description: "Découvrez les dernières innovations technologiques et rencontrez les leaders de l'industrie.",
    date: "2025-07-20",
    time: "09:00",
    location: "Centre de Congrès, Lyon",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    price: "Gratuit",
    category: "Technologie",
    organizer: "Tech Lyon"
  },
  {
    id: "3",
    title: "Atelier Cuisine Française",
    description: "Apprenez à cuisiner les grands classiques de la cuisine française avec un chef étoilé.",
    date: "2025-07-25",
    time: "14:00",
    location: "École Culinaire, Bordeaux",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
    price: "85€",
    category: "Gastronomie",
    organizer: "École Culinaire Bordeaux"
  },
  {
    id: "4",
    title: "Marathon de la Ville",
    description: "Participez au marathon annuel de la ville et relevez le défi des 42 kilomètres à travers les plus beaux quartiers.",
    date: "2025-08-01",
    time: "08:00",
    location: "Centre-ville, Marseille",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop",
    price: "30€",
    category: "Sport",
    organizer: "Ville de Marseille"
  },
  {
    id: "5",
    title: "Exposition d'Art Contemporain",
    description: "Découvrez les œuvres des artistes contemporains les plus prometteurs dans une exposition unique.",
    date: "2025-08-05",
    time: "10:00",
    location: "Musée d'Art Moderne, Nice",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    price: "12€",
    category: "Art",
    organizer: "Musée d'Art Moderne"
  },
  {
    id: "6",
    title: "Festival de Street Food",
    description: "Goûtez aux spécialités culinaires du monde entier dans ce festival de street food exceptionnel.",
    date: "2025-08-10",
    time: "11:00",
    location: "Esplanade des Arts, Toulouse",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
    price: "Gratuit",
    category: "Gastronomie",
    organizer: "Festival Toulouse"
  }
];
