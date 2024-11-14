// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//       darkMode: 'class',
//     container: {
//       center: true,
//     },
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',  // Ensure this is at the root level
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
