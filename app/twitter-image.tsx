import { ImageResponse } from "next/og";

// Configuración de la imagen
export const alt =
  "Bachata al Aire Libre - Clases de Salsa y Bachata en Málaga";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Generación de la imagen
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(to bottom, #FFD700 50%, #0052A5 75%, #EF3340 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Maracas grandes centradas */}
        <div
          style={{
            fontSize: "400px",
            display: "flex",
            transform: "rotate(-15deg)",
          }}
        >
          🪇
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
