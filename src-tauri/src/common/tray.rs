// use tauri::{AppHandle, Manager};
//
//
// /// 打开主页
// fn open_home(app: &AppHandle) {
//     let window = app.get_webview_window("home").unwrap();
//     let hide = window.is_visible().unwrap();
//     let min = window.is_minimized().unwrap();
//     if !hide {
//         window.show().unwrap();
//     }
//     if min {
//         window.unminimize().unwrap();
//     }
//     window.set_focus().unwrap();
// }