import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { events } from "../../data/events";

interface EventDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
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
              <li>• Arrivez 15 minutes avant le début de l'événement</li>
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
