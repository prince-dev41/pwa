import Link from "next/link";
import Image from "next/image";
import { events } from "../data/events";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-blue-600">
              ←
            </Link>
            <h1 className="text-xl font-semibold text-gray-900">Événements</h1>
          </div>
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black text-sm">👤</span>
          </div>
        </div>
      </header>

      {/* Events Grid */}
      <main className="p-4 pb-24">
        <div className="space-y-4">
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
                    <span className="text-sm font-medium text-gray-900">{event.price}</span>
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
                      <span>{new Date(event.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })} à {event.time}</span>
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
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] bg-white border-t border-gray-200">
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
