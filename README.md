# rust-wasm-demo

This simple project demonstrates how to use a Rust project compiled to
Web Assembly with PNPM, which is helpful for monorepos.

There are a few simple packages.

- `my-rust-lib`. A simple rust library to be compiled into WASM.
- `my-ts-lib`. A simple TypeScript library that depends on `my-rust-lib`.
- `my-webpack-app` This is a simple Webpack app that integrates some Rust code.

## Usage

To build, run `pnpm run build`. This will recursively run the build command
for every subpackage listed in `package-list.json`.

The packages in `package-list.json` must be listed in order so that packages
that depend on other packages in the monorepo appear later in the list.
