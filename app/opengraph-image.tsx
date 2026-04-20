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
            "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,64,175,1) 100%)",
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
              opacity: 0.8,
            }}
          >
            Portfolio
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
            Preface Labs
          </div>
          <div style={{ fontSize: 32, opacity: 0.9 }}>
            Side projects by a Carnegie Mellon University master&apos;s student.
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
