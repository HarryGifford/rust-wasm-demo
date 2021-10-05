import MyRustLib from "@sr/my-rust-lib";

const fib = (n: number): number => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

export const main = (n: number) => {
  console.log("Running fib tests...");
  for (let i = 0; i < n; i++) {
    const fibi = fib(i);
    const wasm_fibi = MyRustLib.fib(i);
    if (fibi !== wasm_fibi) {
      const msg = `Error: Expected fib(${i}) = ${fibi}, but got ${wasm_fibi}`;
      throw new Error(msg);
    }
  }
  console.log("Done!");
};
