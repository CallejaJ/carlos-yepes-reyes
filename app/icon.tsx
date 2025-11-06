import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "20%",
          position: "relative",
        }}
      >
        {/* Círculo blanco de fondo */}
        <div
          style={{
            background: "white",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          {/* Maracas con emoji */}
          <div
            style={{
              fontSize: 18,
              display: "flex",
              transform: "rotate(-15deg)",
            }}
          >
            🪇
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
