'use client'

import { useState } from 'react'

const eventsData = [
  {
    id: 1,
    title: 'Concert Jazz',
    date: '2025-07-10',
    desc: 'Concert au parc central',
    cover:
      'https://source.unsplash.com/400x200/?concert,music',
  },
  {
    id: 2,
    title: 'Conférence Tech',
    date: '2025-07-12',
    desc: 'Nouvelles tendances dev',
    cover:
      'https://source.unsplash.com/400x200/?technology,conference',
  },
  {
    id: 3,
    title: 'Marathon',
    date: '2025-07-20',
    desc: 'Course dans toute la ville',
    cover:
      'https://source.unsplash.com/400x200/?marathon,running',
  },
  {
    id: 4,
    title: 'Expo Art',
    date: '2025-07-22',
    desc: "Exposition d'art contemporain",
    cover:
      'https://source.unsplash.com/400x200/?art,exhibition',
  },
  {
    id: 5,
    title: 'Soirée Networking',
    date: '2025-07-25',
    desc: 'Rencontrez des professionnels',
    cover:
      'https://source.unsplash.com/400x200/?networking,event',
  },
  {
    id: 6,
    title: 'Atelier Coding',
    date: '2025-07-28',
    desc: 'Apprenez React avec nous',
    cover:
      'https://source.unsplash.com/400x200/?coding,workshop',
  },
]

const tabs = [
  { id: 'home', label: 'Accueil', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"/></svg>
  ) },
  { id: 'search', label: 'Recherche', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ) },
  { id: 'calendar', label: 'Calendrier', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  ) },
  { id: 'profile', label: 'Profil', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0113 0"/></svg>
  ) },
]

export default function MobileApp() {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState('home')

  const filteredEvents = eventsData.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container mobile fixe 375x667 */}
      <div className="w-[375px] h-[667px] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
          <input
            type="search"
            placeholder="Rechercher..."
            className="flex-grow px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

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

        {/* Contenu scrollable */}
        <main className="flex-grow overflow-y-auto p-4 space-y-4 mb-16">
          {filteredEvents.length === 0 && (
            <p className="text-center text-gray-500">Aucun événement trouvé.</p>
          )}

          {filteredEvents.map((event) => (
            <article
              key={event.id}
              className="border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <img
                src={event.cover}
                alt={event.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-indigo-700">{event.title}</h3>
                <time className="block text-sm text-gray-500 mb-2">{event.date}</time>
                <p className="text-gray-700">{event.desc}</p>
              </div>
            </article>
          ))}
        </main>

        {/* Tab bar fixe en bas */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-around items-center h-14 shadow-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center text-sm gap-1 px-2 ${
                activeTab === tab.id ? 'text-indigo-600' : 'text-gray-500'
              }`}
              aria-label={tab.label}
              title={tab.label}
              type="button"
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
