fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(post => pintar(post))

  function pintar(post){
    let feed = document.getElementById('feed');
    let articulo = "";
    for(let i=0; i<3; i++){
    articulo += `<div class="post"><div class="titulopost">
    <h2>${post[i].title}</h2>
    <div class="comentarios"><p>${post[i].id} comentarios</p></div>
    </div>
    <h5>fecha autor etc</h5>    
    <p>${post[i].body} The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p></div>
`;}
    feed.innerHTML += articulo;
    }


  let botonNoche = document.getElementById('noche');
  let botonDia = document.getElementById('dia');
  let contenido = document.getElementById('contenido');
  let navbar = document.getElementById('navbar');
  let navitem = document.getElementsByClassName('navitem');
  let parrafos = document.getElementsByTagName('p');
  let titulos = document.getElementsByTagName('h2');
  let titulosh4 = document.getElementsByTagName('h4');
  let label = document.getElementsByTagName('label');
  let wrapper = document.getElementsByClassName('wrapper');

  botonNoche.addEventListener('click', modonoche);
  botonDia.addEventListener('click', mododia);

  function modonoche(){
    contenido.style.backgroundColor= "#333";
    navbar.style.backgroundColor= "white";
    for (nav of navitem) {
      nav.style.color = "#333";
    }
    for (parrafo of parrafos) {
      parrafo.style.color = "white";
    }
    
    for (titulo of titulos) {
      titulo.style.color = "white";
    }

    for (titulo of titulosh4) {
      titulo.style.color = "white";
    }

    for (lab of label) {
      lab.style.color = "white";
    }

    for (wrap of wrapper) {
      wrap.style.backgroundColor = "black";
    }
  }

  function mododia(){
    contenido.style.backgroundColor= "white";
    navbar.style.backgroundColor= "#545E75";
    for (nav of navitem) {
      nav.style.color = "white";
    }

    for (parrafo of parrafos) {
      parrafo.style.color = "black";
    }

    for (titulo of titulos) {
      titulo.style.color = "black";
    }

    for (titulo of titulosh4) {
      titulo.style.color = "black";
    }

    for (lab of label) {
      lab.style.color = "black";
    }

    for (wrap of wrapper) {
      wrap.style.backgroundColor = "lightgrey";
    }

  }

  // Scroll

  $('.subir').click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop:0
    },800)
  })




