import { nodeResolve as resolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const config = [
  {
    input: "dist/index.js",
    output: {
      file: "changelly-fiat-api.js",
      format: "cjs",
      sourcemap: true,
    },
    external: ["axios"],
    plugins: [resolve(), typescript()],
  },
  {
    input: "dist/index.d.ts",
    output: {
      file: "changelly-fiat-api.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];

export default config;
