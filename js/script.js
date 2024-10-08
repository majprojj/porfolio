let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
      var target = event.target;
  
      // Verifica si el clic fue dentro de un elemento con la clase 'proyecto'
      while (target && !target.classList.contains('proyecto')) {
        target = target.parentElement;
      }
  
      if (target) {
        var link = target.querySelector('.overlay a');
        if (link) {
          var href = link.getAttribute('href');
          var targetAttr = link.getAttribute('target');
  
          if (targetAttr === '_blank') {
            window.open(href, '_blank');
          } else {
            window.location.href = href;
          }
        }
      }
    });
  });
  
  
  