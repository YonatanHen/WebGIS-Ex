import React from 'react';
import Guide from '../guide';

class Map3D extends React.Component {

  componentDidMount () {
    const code = `mapboxgl.accessToken = 'pk.eyJ1IjoieW9uYTMzMyIsImEiOiJja2ZuamNodzAwZG92MnltcTl5eG12NGl4In0.dfVOhCUagbvm7ZXCGlEbDQ'
    var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v10',
    center: [34.639158, 31.793061],
    zoom: 16.5,
    pitch: 45,
    bearing: -17.6,
    container: 'map',
    antialias: true
    });
    map.on('load', function () {
    var layers = map.getStyle().layers;
    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
    labelLayerId = layers[i].id;
    break;
    }
    }
    map.addLayer(
    {
    'id': 'add-3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
    'fill-extrusion-color': '#aaa',
    'fill-extrusion-height': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'height']
    ],
    'fill-extrusion-base': [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'min_height']
    ],
    'fill-extrusion-opacity': 0.6
    }
    },
    
    labelLayerId
    );
    });
    
    map.addControl(new mapboxgl.FullscreenControl())`;
    new Function(code)();
  }


  render() {
    return (
      <>
        <Guide guidance = {undefined}/>
        <noscript/>
    </>
    )
  }
}

export default Map3D;
