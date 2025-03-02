import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slideDown 0.3s ease-out',
		'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
		fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  fadeInUp: {
			'0%': { opacity: '0', transform: 'translateY(20px)' },
			'100%': { opacity: '1', transform: 'translateY(0)' },
		  },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
