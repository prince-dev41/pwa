'use client'

import { useState } from 'react'

const eventsData = [
  { id: 1, title: 'Concert Jazz', date: '2025-07-10', desc: 'Concert au parc central' },
  { id: 2, title: 'Conférence Tech', date: '2025-07-12', desc: 'Nouvelles tendances dev' },
  { id: 3, title: 'Marathon', date: '2025-07-20', desc: 'Course dans toute la ville' },
  { id: 4, title: 'Expo Art', date: '2025-07-22', desc: 'Exposition d\'art contemporain' },
  { id: 5, title: 'Soirée Networking', date: '2025-07-25', desc: 'Rencontrez des professionnels' },
  { id: 6, title: 'Atelier Coding', date: '2025-07-28', desc: 'Apprenez React avec nous' },
]

export default function MobileApp() {
  const [search, setSearch] = useState('')

  const filteredEvents = eventsData.filter(e =>
    e.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container fixe mobile 375x667 */}
      <div className="w-[375px] h-[667px] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
          {/* Barre recherche */}
          <input
            type="search"
            placeholder="Rechercher..."
            className="flex-grow px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Icone profil */}
          <button
            aria-label="Profil"
            className="ml-4 p-2 rounded-full hover:bg-gray-200"
            title="Profil"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A9 9 0 1118.878 6.196a9 9 0 01-13.757 11.608z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </header>

        {/* Liste scrollable */}
        <main className="flex-grow overflow-y-auto p-4 space-y-4">
          {filteredEvents.length === 0 && (
            <p className="text-center text-gray-500">Aucun événement trouvé.</p>
          )}

          {filteredEvents.map((event) => (
            <article
              key={event.id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-indigo-700">{event.title}</h3>
              <time className="block text-sm text-gray-500 mb-2">{event.date}</time>
              <p className="text-gray-700">{event.desc}</p>
            </article>
          ))}
        </main>
      </div>
    </div>
  )
}
