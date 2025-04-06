// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        // Add more if needed
        transform: "transform",
        spacing: "margin, padding",
        height: "height",
        width: "width",
      },
    },
  },
  plugins: [],
};
  