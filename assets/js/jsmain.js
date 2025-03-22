(function(){

var burger = document.querySelector('.burger');
  burger.addEventListener('click', function(){
    if(document.querySelector('nav.navegadorPrincipal').classList.contains('visible') === false){
      document.querySelector('nav.navegadorPrincipal').classList.add('visible');
    }
    else{
      document.querySelector('nav.navegadorPrincipal').classList.remove('visible');
    }
    if(this.classList.contains('tache') === false){
      this.classList.add('tache');
    }
    else{
      this.classList.remove('tache');
    }
  });
})();


   