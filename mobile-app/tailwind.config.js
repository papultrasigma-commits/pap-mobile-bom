/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "#06080d",
          surface: "#0d121b",
          surfaceSoft: "#121826",
          border: "rgba(255,255,255,0.08)",
          muted: "#8b93a7",
          accent: "#ff5a64",
          accentSoft: "rgba(255,90,100,0.16)",
        },
      },
      boxShadow: {
        app: "0 18px 40px rgba(0, 0, 0, 0.35)",
        float: "0 10px 30px rgba(255, 90, 100, 0.18)",
      },
      backgroundImage: {
        "app-shell":
          "radial-gradient(circle at top, rgba(255,90,100,0.18), transparent 28%), linear-gradient(180deg, #0a0f17 0%, #06080d 28%, #06080d 100%)",
        "card-glow":
          "linear-gradient(135deg, rgba(255,90,100,0.16), rgba(255,255,255,0.02))",
      },
    },
  },
  plugins: [],
};
