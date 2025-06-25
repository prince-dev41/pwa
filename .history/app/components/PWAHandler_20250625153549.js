"use client";

import { useEffect, useState } from "react";

export default function PWAHandler() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileWidth = window.innerWidth <= 768;
      const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      return isMobileWidth || isMobileUserAgent;
    };

    const mobile = checkMobile();
    setIsMobile(mobile);

    if (!mobile && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });

      // Supprimer les caches existants
      if ('caches' in window) {
        caches.keys().then((names) => {
          for (const name of names) {
            caches.delete(name);
          }
        });
      }
    }

    // Écouter les changements de taille d'écran
    const handleResize = () => {
      const newMobile = checkMobile();
      if (newMobile !== mobile) {
        setIsMobile(newMobile);
        if (!newMobile && 'serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (const registration of registrations) {
              registration.unregister();
            }
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null; // Ce composant ne rend rien
}
