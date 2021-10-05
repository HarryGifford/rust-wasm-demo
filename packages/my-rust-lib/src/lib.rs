mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
  fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
  alert("Hello, my-rust-lib!");
}

/** Computes the nth fibonacci number. */
#[wasm_bindgen]
pub fn fib(n: i32) -> i32 {
  if n < 2 {
    n
  } else {
    fib(n - 1) + fib(n - 2)
  }
}
