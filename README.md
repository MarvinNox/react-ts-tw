# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## Dependencies

"dependencies": {
"@hookform/resolvers": "^5.2.1", //resolver for Yup + react hookform
"@radix-ui/react-dialog": "^1.1.15", // ui
"@radix-ui/react-label": "^2.1.7", // ui
"@radix-ui/react-slot": "^1.2.3", // ui
"@tailwindcss/vite": "^4.1.11",
"@tanstack/react-query": "^5.85.5",
"axios": "^1.11.0", // CRUD
"class-variance-authority": "^0.7.1",
"clsx": "^2.1.1",
"lucide-react": "^0.539.0", // icon-pack, or some react-icons (optional)
"react": "^19.1.1",
"react-dom": "^19.1.1",
"react-hook-form": "^7.62.0", // hook form
"react-router-dom": "^7.8.1", // router
"tailwind-merge": "^3.3.1",
"tailwindcss": "^4.1.11",
"yup": "^1.7.0" // validation
},
"devDependencies": {
"@eslint/js": "^9.32.0",
"@types/node": "^24.2.1",
"@types/react": "^19.1.9",
"@types/react-dom": "^19.1.7",
"@vitejs/plugin-react": "^4.7.0",
"eslint": "^9.32.0",
"eslint-plugin-react-hooks": "^5.2.0",
"eslint-plugin-react-refresh": "^0.4.20",
"globals": "^16.3.0",
"tw-animate-css": "^1.3.6",
"typescript": "~5.8.3",
"typescript-eslint": "^8.39.0",
"vite": "^7.1.0"
}
