import { ImageResponse } from "next/og";
import { BrandIcon } from "./brand-icon";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 760 }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#fca5a5",
            }}
          >
            Carnegie Mellon University
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
            Preface Labs
          </div>
          <div style={{ fontSize: 32, opacity: 0.92 }}>
            Shipped AI and product projects built while studying at CMU.
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
