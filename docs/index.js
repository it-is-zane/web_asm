const importObj = { Math };

const response = await fetch("bin/web_asm.wasm");
const {instance} = await WebAssembly.instantiateStreaming(response, importObj);
