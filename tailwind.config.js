/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        md: "768px",
        "2xl": "1696px",
      },
      maxWidth: {
        md: "1696px",
        "2xl": "1696px",
      },
      fontFamily: {
        regular: ["Regular"],
        medium: ["Medium"],
      },
      color: {
        "text-primary-1": "#00A88E",
        button_color: "#0060AF",
      },
    },
  },
  plugins: [],
});
