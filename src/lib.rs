mod math {
    mod math_js {
        #[link(wasm_import_module = "Math")]
        unsafe extern "C" {
            pub fn random() -> f64;
        }
    }

    pub fn random() -> f64 {
        unsafe { math_js::random() }
    }
}

#[unsafe(no_mangle)]
pub extern "C" fn add(left: f64, right: f64) -> f64 {
    left + right + math::random()
}
