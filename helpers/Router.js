import { bd } from "../assets/bd.js"
import { CardMenu } from "../components/CardMenu.js";
import { sliderSlide } from "../helpers/sliderSlide.js";
import { validacionFrom } from "../helpers/validacionForm.js";
import { Secciones } from "../components/Secciones.js";

export function Router(){
    //console.log(location.hash)
    const { hash } = location;
    const $posts = document.getElementById('posts')

    $posts.innerHTML = null;

    if(!hash || hash === '#/'){
        let html = ''
        const presentación = bd.presentación;
        presentación.forEach(el => html += CardMenu(el))
        $posts.innerHTML = html
    } else if(hash === '#/ariel'){
        Secciones('./vistas/ariel.html', sliderSlide);
    } else if (hash === '#/contacto'){
        Secciones('./vistas/contactame.html', validacionFrom);
    } else if (hash === '#/proyectos'){
        Secciones('./vistas/seccionProyectos.html')
    } else if (hash === '#/redes'){
        Secciones('./vistas/redes.html');
    } else if (hash === '#/certificados'){
        Secciones('./vistas/certificados.html');
    }
}