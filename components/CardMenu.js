export function CardMenu({title, foto, description, style, styleG, path, ir}){
    
return `
      <article class='${style} ${styleG}'>
      <h2>${title}</h2>
      <img src='${foto}'/>
      <p class='descProy'>${description}</p>
      <a href='${path}'>${ir}</a>
      </article>
    `
}