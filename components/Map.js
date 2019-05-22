import { Component } from "react";

class Map extends Component {
    
    componentDidMount() {
      // Initialize the platform object:
      var platform = new H.service.Platform({
      'app_id': 'ILGV5JrGM3GDvpqJsGhj',
      'app_code': 'YPwfla7gUdYfs-WdBTMF0g',
      });

      // Obtain the default map types from the platform object
      var maptypes = platform.createDefaultLayers();
      console.log(platform);
      // Instantiate (and display) a map object:
      var map = new H.Map(
      document.getElementById('mapContainer'),
      maptypes.normal.map,
      {
        zoom: 13,
        center: { lng: 77.59, lat: 12.95 }
      });

    }

  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }} id="mapContainer" />
    );
  }
}
export default Map;
