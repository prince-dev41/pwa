'use client'

import { useEffect, useState } from 'react'

export default function MobileOnly({ children }) {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const mobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
    setIsMobile(mobile)
  }, [])

  if (!isMobile) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>🚫 Disponible uniquement sur mobile</h1>
      </div>
    )
  }

  return children
}