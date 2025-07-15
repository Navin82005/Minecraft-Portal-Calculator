#[tauri::command]
pub fn calculate_coordinate_nether_to_overworld(f32: x, f32: y, f32: z) {
    f32 resX = (x * 8);
    f32 resY = (y);
    f32 resZ = (z * 8);
    
}