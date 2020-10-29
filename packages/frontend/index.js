import * as wasm from "demo-rust";

const main = () => {
    const canvas = document.createElement("canvas")
    canvas.classList.add("main-canvas");
    document.body.appendChild(canvas);
    const gl = canvas.getContext("webgl2", {
        antialias: true
    });

    wasm.start(gl);
}

main();
