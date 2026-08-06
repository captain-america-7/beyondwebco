import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BeyondWebCo | Premium Web Design & Development Studio",
    short_name: "BeyondWebCo",
    description: "We build fast, modern, high-performance SEO-friendly websites and web applications for growing businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#9D4EDD",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
