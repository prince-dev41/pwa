import './globals.css'
import PwaControl from './components/PwaControl'

export const metadata = {
  title: 'Mon App Mobile',
  description: 'App PWA disponible uniquement sur mobile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        <PwaControl />
        {children}
      </body>
    </html>
  )
}