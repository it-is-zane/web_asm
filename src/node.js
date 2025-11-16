const importObj = { Math };

// const data = require("fs").readFileSync("/home/zanegant/Projects/Rust/web_asm/target/wasm32-unknown-unknown/release/web_asm.wasm");
// const {instance} = await WebAssembly.instanciate(data, importObj);

const response = await fetch("/home/zanegant/Projects/Rust/web_asm/target/wasm32-unknown-unknown/release/web_asm.wasm");
const {instance} = await WebAssembly.instantiateStreaming(response, importObj);

instance.exports.add(40, 2)
