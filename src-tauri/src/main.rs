// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use crate::common::window::set_window_attribute;
use crate::common::plugins::{ reset_set_window };

mod common;


fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .setup(|app| {
            set_window_attribute(app);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![reset_set_window]) // 使用定义的插件
        .run(context)
        .expect("error while running tauri application");
}
