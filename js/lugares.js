lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

  function autocompletar() {

    var input = document.getElementById("direccion");

    var circle = new google.maps.Circle({
      center: posicionCentral,
      radius: 20000
    });

    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.setBounds(circle.getBounds());
  }

  // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar() {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

  // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca(posicion) {

    var radius = document.getElementById("radio").value;
    var type = document.getElementById('tipoDeLugar').value;

    var request = {
      location: posicion,
      radius: radius,
      type: [type],
    };

    servicioLugares.nearbySearch(request, marcadorModulo.marcarLugares);

  }
  return {
    inicializar,
    buscarCerca
  }
})()
