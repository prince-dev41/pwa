import Link from "next/link";

const events = [
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
export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">E</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Events</h1>
          </div>
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black text-sm">👤</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {/* Welcome Section */}
        <div className="bg-green-50 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-lg">🎯</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Événements</h2>
              <p className="text-sm text-gray-600">Découvrez les événements à venir</p>
            </div>
          </div>
          <Link
            href="/events"
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-green-700 transition-colors"
          >
            Événements →
          </Link>
        </div>

        {/* Profile Section */}
        <div className="bg-blue-50 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-lg">👤</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Profil</h2>
              <p className="text-sm text-gray-600">Gérez vos informations personnelles.</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-blue-700 transition-colors">
            Mon profil →
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          <Link href="/" className="flex flex-col items-center py-2 px-3">
            <span className="text-blue-600 text-sm">🏠</span>
            <span className="text-xs text-blue-600 font-medium">Accueil</span>
          </Link>
          <Link href="/events" className="flex flex-col items-center py-2 px-3">
            <span className="text-gray-400 text-sm">📅</span>
            <span className="text-xs text-gray-400">Événements</span>
          </Link>
          <Link href="/favorites" className="flex flex-col items-center py-2 px-3 relative">
            <span className="text-gray-400 text-sm">❤️</span>
            <span className="text-xs text-gray-400">Favoris</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
          </Link>
          <Link href="/profile" className="flex flex-col items-center py-2 px-3">
            <span className="text-gray-400 text-sm">⚙️</span>
            <span className="text-xs text-gray-400">Profil</span>
          </Link>
          <Link href="/menu" className="flex flex-col items-center py-2 px-3">
            <span className="text-gray-400 text-sm">☰</span>
            <span className="text-xs text-gray-400">Menu</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
