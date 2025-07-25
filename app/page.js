import Link from "next/link";
import Image from "next/image";
import fetchEvents from "./data/event";

const events = [
  {
    id: "1",
    title: "Concert de Jazz en plein air",
    description:
      "Venez profiter d'une soirée de jazz exceptionnel dans le parc central de la ville avec des artistes renommés.",
    date: "2025-07-15",
    time: "20:00",
    location: "Parc Central, Paris",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
    price: "25€",
    category: "Musique",
    organizer: "Jazz Festival Paris",
  },
  {
    id: "2",
    title: "Conférence Tech Innovation",
    description:
      "Découvrez les dernières innovations technologiques et rencontrez les leaders de l'industrie.",
    date: "2025-07-20",
    time: "09:00",
    location: "Centre de Congrès, Lyon",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    price: "Gratuit",
    category: "Technologie",
    organizer: "Tech Lyon",
  },
  {
    id: "3",
    title: "Atelier Cuisine Française",
    description:
      "Apprenez à cuisiner les grands classiques de la cuisine française avec un chef étoilé.",
    date: "2025-07-25",
    time: "14:00",
    location: "École Culinaire, Bordeaux",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
    price: "85€",
    category: "Gastronomie",
    organizer: "École Culinaire Bordeaux",
  },
  {
    id: "4",
    title: "Marathon de la Ville",
    description:
      "Participez au marathon annuel de la ville et relevez le défi des 42 kilomètres à travers les plus beaux quartiers.",
    date: "2025-08-01",
    time: "08:00",
    location: "Centre-ville, Marseille",
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop",
    price: "30€",
    category: "Sport",
    organizer: "Ville de Marseille",
  },
  {
    id: "5",
    title: "Exposition d'Art Contemporain",
    description:
      "Découvrez les œuvres des artistes contemporains les plus prometteurs dans une exposition unique.",
    date: "2025-08-05",
    time: "10:00",
    location: "Musée d'Art Moderne, Nice",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    price: "12€",
    category: "Art",
    organizer: "Musée d'Art Moderne",
  },
  {
    id: "6",
    title: "Festival de Street Food",
    description:
      "Goûtez aux spécialités culinaires du monde entier dans ce festival de street food exceptionnel.",
    date: "2025-08-10",
    time: "11:00",
    location: "Esplanade des Arts, Toulouse",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
    price: "Gratuit",
    category: "Gastronomie",
    organizer: "Festival Toulouse",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Image
                src={"logo.jpg"}
                alt={"Logo Evenet"}
                className="object-cover rounded-full"
                width={40}
                height={40}
              />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Events</h1>
          </div>
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black text-sm">👤</span>
          </div>
        </div>
      </header>

      {/* Events Grid */}
      <main className="p-4 pb-24">
        <div className="w-full max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="block"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                  {/* Event Image */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 375px) 100vw, 375px"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <span className="text-sm font-medium text-gray-900">
                        {event.price}
                      </span>
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-lg leading-tight flex-1 pr-2">
                        {event.title}
                      </h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full whitespace-nowrap">
                        {event.category}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>📅</span>
                        <span>
                          {new Date(event.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}{" "}
                          à {event.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>📍</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
