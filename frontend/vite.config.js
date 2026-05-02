import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: "/~maraim/K26/context/",
=======
  base: "/~maraim/K26/custom-hooks/",
>>>>>>> 8059bb5086a9f9d61dfa2ba6e551a315c885f0ac
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
