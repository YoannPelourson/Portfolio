
function init(directory, imgs) {
  //We check if the user has put the init attribut inside his HTML
  if(document.querySelectorAll('[data-use="slider"]').length === 1) {
      //We get the container which will contain all the imgs.
      let sliderContainer = document.querySelectorAll('[data-use="slider"]') [0];
      sliderContainer.style.display = "flex";
      sliderContainer.style.flexDirection = "row";
      sliderContainer.style.alignItems = "center";
      let previous = document.createElement('div');
      previous.innerHTML = "<";
      sliderContainer.appendChild(previous);
      previous.style.fontSize = "50px";

      for (let i = 0; i < imgs.length; i++) {
        let sliderElementContainer = document.createElement('div');
         //We create a new img balise
        let sliderElement = document.createElement('img');
        //Add the src attribute to load the image
        sliderElement.setAttribute('src', directory + '/' + imgs[i]);
        sliderElement.style.maxWidth = "100%";
        sliderElement.style.height = "auto";
        sliderElement.style.maxHeight = "500px";
        if(i != 0){
          sliderElement.style.display = "none";
        }
        //We append the img balise to the sliderContainer
        sliderElementContainer.appendChild(sliderElement);
        //We then append the div containing in the img to the container of all imgs
        sliderContainer.appendChild(sliderElementContainer);

      };
      let next = document.createElement('div');

      next.innerHTML = ">";
      next.style.fontSize = "50px";
      sliderContainer.appendChild(next);
      enableNavigation(next, previous);


  } else {
    //Throw a new error if there is not exactly one element
    throw ('Error, found' + document.querySelectorAll('[data-use="slider"]').length + 'elements');
  };
};
    function enableNavigation(next, previous) {
      next.addEventListener('click', nextAction);
      previous.addEventListener('click', previousAction);

      document.addEventListener('keydown', function(el) {
        chooseAction(el);
      });
};
function chooseAction(el) {
  //37 previous, 39 next
  if(el.key == "ArrowLeft"){
    previousAction();
  } else if (el.key == "ArrowRight") {
    nextAction();

  }

}
function nextAction() {

    //Quand je clique, cache l'image en cours, et affiche l'image suivante.
    let imgs = document.querySelectorAll('[data-use="slider"]>div>img');
      for (let i = 0; i < imgs.length; i++) {
        if(imgs[i].style.display != "none"){
          imgs[i].style.display = "none";
          if((i + 1) >= imgs.length){
            imgs [0].style.display = "inherit";

          } else {
          imgs[i + 1].style.display = "inherit";
          }
          break;
        }
      }
}
function previousAction(){
    console.log('Previous');
    let imgs = document.querySelectorAll('[data-use="slider"]>div>img');
      for (let i = 0; i < imgs.length; i++) {
        if(imgs[i].style.display != "none"){
          imgs[i].style.display = "none";
          if((i - 1) < 0){
            imgs [imgs.length - 1].style.display = "inherit";

          } else {
          imgs[i - 1].style.display = "inherit";
          }
          break;
        }
      }
}
init ('./assets/imgs/slider', ['']);
