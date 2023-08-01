function mostrarSala() {
   let indice = document.querySelector('.indice') 
   indice.style.display = "block"  

   let container = document.querySelector('.container')
   container.style.display = "block"

   let botao = document.querySelector('#botao')
   botao.style.display = 'block'
}

let container = document.querySelector('.container')

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('assento') && !e.target.classList.contains('ocupado')){
       e.target.classList.toggle('selecionado') 
    }    
})

function confirmar() {
   
     document.querySelector('.selecionado').className = "assento ocupado"
   
   
}

