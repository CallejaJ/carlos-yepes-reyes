import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
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
          borderRadius: "22%",
          position: "relative",
        }}
      >
        {/* Maracas con emoji */}
        <div
          style={{
            fontSize: 120,
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
