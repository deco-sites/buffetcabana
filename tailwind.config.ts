import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "contact": "url(/background-contact.png)",
        "footer": "url(/bg-footer.png)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["inherit", "serif"],
      }
    },
  },
};
