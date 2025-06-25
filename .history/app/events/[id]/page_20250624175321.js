import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

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
export default async function EventDetailPage({params}) {
  const { id } = await params;
  const event = events.find(e => e.id === id);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/events" className="text-blue-600">
              ←
            </Link>
            <h1 className="text-xl font-semibold text-gray-900">Détails</h1>
          </div>
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black text-sm">👤</span>
          </div>
        </div>
      </header>

      {/* Event Details */}
      <main className="pb-32">
        {/* Event Image */}
        <div className="relative h-64 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
            <span className="text-lg font-bold text-gray-900">{event.price}</span>
          </div>
          <div className="absolute top-4 left-4 bg-blue-100/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-blue-800">{event.category}</span>
          </div>
        </div>

        {/* Event Info */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {event.title}
          </h1>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-lg">📅</span>
              <div>
                <p className="font-medium text-gray-900">Date et heure</p>
                <p className="text-gray-600">
                  {new Date(event.date).toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })} à {event.time}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-lg">📍</span>
              <div>
                <p className="font-medium text-gray-900">Lieu</p>
                <p className="text-gray-600">{event.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-lg">👥</span>
              <div>
                <p className="font-medium text-gray-900">Organisé par</p>
                <p className="text-gray-600">{event.organizer}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">À propos de cet événement</h2>
            <p className="text-gray-600 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Informations importantes</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Arrivez 15 minutes avant le début de 'événement</li>
              <li>• Veuillez apporter une pièce d'identité</li>
              <li>• Événement soumis aux conditions météorologiques</li>
              <li>• Aucun remboursement après achat</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Fixed Register Button */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] bg-white border-t border-gray-200 p-4">
        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors">
          S'inscrire - {event.price}
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          <Link href="/" className="flex flex-col items-center py-2 px-3">
            <span className="text-gray-400 text-sm">🏠</span>
            <span className="text-xs text-gray-400">Accueil</span>
          </Link>
          <Link href="/events" className="flex flex-col items-center py-2 px-3">
            <span className="text-blue-600 text-sm">📅</span>
            <span className="text-xs text-blue-600 font-medium">Événements</span>
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
