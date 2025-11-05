"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Volume2, VolumeX, Music } from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        try {
          // Cargar el audio si no está cargado
          if (audioRef.current.readyState < 2) {
            audioRef.current.load();
          }
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Error playing music:", error);
          alert(
            "No se pudo reproducir la música. Verifica que el archivo existe en /public/sounds/salsa-mix-fiesta.mp3"
          );
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="metadata">
        <source src="/sounds/salsa-mix-fiesta.mp3" type="audio/mpeg" />
      </audio>

      <Button
        onClick={togglePlay}
        size="icon"
        className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-accent hover:bg-accent/90 text-white shadow-[0_8px_30px_rgba(220,38,38,0.5)] transition-all hover:scale-110 hover:shadow-[0_12px_40px_rgba(220,38,38,0.7)] animate-pulse"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isLoading ? (
          <Music className="h-7 w-7 animate-spin" />
        ) : isPlaying ? (
          <Volume2 className="h-7 w-7" />
        ) : (
          <VolumeX className="h-7 w-7" />
        )}
      </Button>
    </>
  );
}
