import Link from "next/link";

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
