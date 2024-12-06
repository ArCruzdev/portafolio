export async function ajax(url){
  try {
    const response = await fetch(url);
    if (response.ok) {
        const content = await response.text();
        return content;
    } else {
        console.error('Error al cargar la página:', response.status);
    }
} catch (error) {
    console.error('Error de red:', error);
}
}

// export async function ajax({url, cbSuccess}){
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//         const content = await response.text();
//         document.getElementById('root').innerHTML = content; // Insertar el contenido en el div con id="app"
//         // Aquí puedes seleccionar y manipular los elementos cargados
//         sliderSlide();
//     } else {
//         console.error('Error al cargar la página:', response.status);
//     }
// } catch (error) {
//     console.error('Error de red:', error);
// }
// }




