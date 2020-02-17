var mapa;// Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
var posicionCentral = { lat: -34.614685, lng: -58.391175};
var city = "Buenos Aires";

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa() {
  mapa = new google.maps.Map(document.getElementById("map"), {
    center: posicionCentral,
    zoom: 11
  });

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
};
