import { ImageResponse } from "next/og";
import { BrandIcon } from "./brand-icon";

export const size = {
  width: 1200,
  height: 675,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0C0D10",
          padding: "80px",
          color: "#FFFFFF",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 760 }}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: 3.5,
              textTransform: "uppercase",
              color: "#FF4D6D",
              fontWeight: 700,
            }}
          >
            A tech holding company
          </div>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>
            <span>Preface Labs</span>
            <span style={{ color: "#FF4D6D" }}>_</span>
          </div>
          <div style={{ fontSize: 30, color: "#94A3B8" }}>
            The introduction to what&apos;s next.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BrandIcon size={260} />
        </div>
      </div>
    ),
    size,
  );
}

