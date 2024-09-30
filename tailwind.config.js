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
        bold: ["Bold"],
        medium: ["Medium"],
      },
      colors: {
        "text-primary-1": "#00A88E",
        button_color: "#0060AF",
        text_blue: "#0060AF",
        counterText1: "#005295",
        counterText2: "#008F79",
        counterText3: "#831F7A",
        counterbg1: "#E6EFF7",
        counterbg2: "#E6F6F4",
        counterbg3: "#F5E9F4",
      },
      backgroundImage: {
        strategy: "url('/src/component/Strategies/frame.png')",
      },
    },
  },
  plugins: [],
});
