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
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Círculos decorativos de fondo */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
            opacity: 0.3,
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            opacity: 0.2,
            filter: "blur(90px)",
          }}
        />

        {/* Contenido Principal */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "80px 60px",
            zIndex: 10,
            maxWidth: "1000px",
          }}
        >
          {/* Icono Musical */}
          <div
            style={{
              fontSize: "80px",
              marginBottom: "20px",
            }}
          >
            🎵
          </div>

          {/* Título Principal */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "900",
              background: "linear-gradient(to right, #ffffff, #e2e8f0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              margin: "0 0 20px 0",
              textShadow: "none",
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            BACHATA AL AIRE LIBRE
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: "36px",
              color: "#fbbf24",
              margin: "0 0 50px 0",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            Clases de Salsa y Bachata
          </p>

          {/* Precios */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "stretch",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
                borderRadius: "24px",
                padding: "30px 45px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                border: "3px solid #ef4444",
                minWidth: "250px",
              }}
            >
              <span
                style={{
                  fontSize: "64px",
                  fontWeight: "900",
                  color: "#ef4444",
                  lineHeight: 1,
                }}
              >
                €10
              </span>
              <span
                style={{
                  fontSize: "20px",
                  color: "#1e293b",
                  fontWeight: "700",
                  marginTop: "12px",
                }}
              >
                + Pareja GRATIS
              </span>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                borderRadius: "24px",
                padding: "30px 45px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 20px 60px rgba(239,68,68,0.5)",
                minWidth: "250px",
              }}
            >
              <span
                style={{
                  fontSize: "64px",
                  fontWeight: "900",
                  color: "white",
                  lineHeight: 1,
                }}
              >
                €25
              </span>
              <span
                style={{
                  fontSize: "20px",
                  color: "white",
                  fontWeight: "700",
                  marginTop: "12px",
                }}
              >
                Clase Privada
              </span>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            color: "#e2e8f0",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span>Carlos Yépez</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span>Málaga</span>
          </div>
          <div style={{ fontSize: "20px", opacity: 0.8 }}>
            @bachataalairelibre
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
