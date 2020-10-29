# rust-wasm-demo

This simple project demonstrates how to use a Rust project compiled to
Web Assembly with PNPM, which is helpful for monorepos.

There are two main packages:

- `demo-rust`. Rust code that will be compiled into WASM.
- `frontend`. Standard front-end package. This is your normal Webpack project
that can then be integrated into your site.

## Usage

To run the project, first run `init`. This command will compile the `demo-rust`
`package.json` which is necessary for PNPM to run correctly. Hopefully there's
a better way to do this, but for now this is required or PNPM will fail
complaining it can't find the `demo-rust` package.

You can then go to `packages/frontend` and run `pnpm run start` to load a
web page which will then run the rust code.

## Steps to create project

Below are the steps you can use to create such a project yourself.

1. Run `pnpm init` and follow the steps.
2. Create a `pnpm-workspace.yaml` file. You can see how it's filled out.
3. Create a directory `packages`.
4. Go to the `packages` directory and run `cargo generate --git https://github.com/rustwasm/wasm-pack-template`. See the instructions on [Getting started](https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/getting-started.html). Give it the name `demo-rust`.
5. Create a directory and name it `frontend`. Run `npm init wasm-app`.
6. Delete the `.git` directories in the two folders. We are using a mono-repo structure so we only want one git repo.
7. Go to the root directory (that this README is in) and run `git init`.
8. Configure the `.gitignore` files how you wish.
9. Delete the `package-lock.json` in the `frontend` directory. We will use PNPM instead.
10. Delete the .bin folder in `frontend` and from the `package.json`. We don't need `create-wasm-app` since we ran it manually.
