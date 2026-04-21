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
          background:
            "linear-gradient(135deg, rgba(17,24,39,1) 0%, rgba(63,63,70,1) 100%)",
          padding: "72px",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 760 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 3.5,
              textTransform: "uppercase",
              color: "#fca5a5",
            }}
          >
            CMU Student Portfolio
          </div>
          <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05 }}>
            Preface Labs
          </div>
          <div style={{ fontSize: 30, opacity: 0.92 }}>
            Real products shipped alongside class, focused on AI and growth.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BrandIcon size={280} />
        </div>
      </div>
    ),
    size,
  );
}
