"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Lazy load GMaps solo cuando sea visible
const GMaps = dynamic(() => import("@/components/gmaps"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[450px] bg-muted animate-pulse flex items-center justify-center">
      <p className="text-muted-foreground">Cargando mapa...</p>
    </div>
  ),
});

export default function GMapsWrapper(props: { height?: number }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Solo cargar el mapa cuando el usuario hace scroll cerca
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
        }
      },
      {
        rootMargin: "200px", // Cargar 200px antes de ser visible
      }
    );

    const element = document.getElementById("gmaps-container");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="gmaps-container" className="w-full">
      {shouldLoad ? (
        <GMaps height={props.height} />
      ) : (
        <div
          className={`w-full bg-muted flex items-center justify-center cursor-pointer hover:bg-muted/80 transition ${
            props.height ? `gmaps-height-${props.height}` : "gmaps-height-450"
          }`}
          onClick={() => setShouldLoad(true)}
        >
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">📍 Mapa de Ubicación</p>
            <p className="text-sm text-muted-foreground">
              Click para cargar el mapa
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
