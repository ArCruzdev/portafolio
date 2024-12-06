import { ajax } from "../helpers/ajax.js";

export async function Secciones(url, cbSucces){
    const data = await ajax(url);
    document.getElementById('root').innerHTML = data;
    cbSucces();
}