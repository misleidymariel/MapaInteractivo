streetViewModulo = (function () {
  var panorama; // 'Visor' de StreetView

  function inicializar() {
  
    panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
      position: posicionCentral,
    });

    mapa.setStreetView(panorama);
  }

  // Actualiza la ubicación del Panorama
  function fijarStreetView(ubicacion) {
 
    var latitude = ubicacion.lat();
    var longitude = ubicacion.lng();
    var fenway = { lat:latitude , lng:  longitude };

    panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
      position: fenway,
    });

    mapa.setStreetView(panorama);
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
