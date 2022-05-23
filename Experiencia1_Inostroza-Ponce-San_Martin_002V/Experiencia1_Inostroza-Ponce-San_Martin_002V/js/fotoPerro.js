function obtenerImagenAleatoria(){

    linkApi = "https://dog.ceo/api/breeds/image/random";
  
    fetch(linkApi)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      mostrarImagen(data.message);
    })
    .catch(function(error){
      console.log("Error: " + error);
    });
  
  
  }
  
  function mostrarImagen(imagenPerro){
    document.getElementById("perro").src = imagenPerro;
  }
  