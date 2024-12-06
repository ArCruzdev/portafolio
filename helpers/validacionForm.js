export function validacionFrom(){
    const $form = document.querySelector('.contact-form'),
     $inputs = document.querySelectorAll('input[required]');
    
     $inputs.forEach(input => {
        const $span = document.createElement('span');
         $span.classList.add('contact-form-error', 'none');
         $span.id = input.name;
         $span.textContent = input.title;
         input.insertAdjacentElement("afterend", $span)
     })
     
     document.addEventListener('keyup', e => {
        if(e.target.matches('input[required]')){
           const $input = e.target;
           const pattern = $input.pattern; 
    
           if(pattern && $input.value !== ''){
            let regex = new RegExp(pattern);
            return !regex.exec($input.value)
             ? document.getElementById($input.name).classList.add('is-active')
             : document.getElementById($input.name).classList.remove('is-active')
           }

           if(!pattern){
            return $input.value === '' 
             ? document.getElementById($input.name).classList.add('is-active')
             : document.getElementById($input.name).classList.remove('is-active')
           }
        }
     })

     document.addEventListener('submit', e => {
        e.preventDefault();
      const $loader = document.querySelector('.contact-form-loader'),
       $response = document.querySelector('.contact-form-response');

       $loader.classList.remove('none')

       fetch('https://formsubmit.co/ajax/ariel.cruz@cun.edu.co', {
         method : "POST",
         body : new FormData(e.target)
       })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
         console.log(json)
         $loader.classList.add('none')
         $response.classList.remove('none')
         $response.innerHTML = `<p>${json.message}</p>`
         $form.reset();
        })
         .catch(err => {
            console.log(err)
            let message = err.statusText || 'Ocurrio un error al enviar, intenta nuevamente'
            $response.innerHTML = `Error ${err.status}: ${message}`
         })
          .finally(() => setTimeout(()=> {
            $response.classList.add('none')
            $response.innerHTML = '';
         }, 3000))

     })
}