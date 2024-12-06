import { Posts } from "./components/Posts.js"
import { Router } from "./helpers/Router.js"

export function App(){
    const $root = document.getElementById('root')
    
    $root.innerHTML = null;
    $root.appendChild(Posts())
    Router() 
}