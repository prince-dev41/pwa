'use client'

import { useEffect } from 'react'

export default function PwaControl() {
  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)

    if (!isMobile && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          registration.unregister()
        }
      })
    }
  }, [])

  return null
}
