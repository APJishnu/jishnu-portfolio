# Archived portfolio implementation

This folder contains the older root-level App Router, component tree, and configuration files. They were moved here because Next.js was selecting them ahead of the active editorial portfolio in `src/app`, and the older PostCSS config required an undeclared `autoprefixer` package.

The active application uses `src/app`, `next.config.ts`, and `postcss.config.mjs`. Legacy files are excluded from the TypeScript project and are retained here for reference.
