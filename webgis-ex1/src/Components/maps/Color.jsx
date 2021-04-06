import React from 'react';
import Guide from '../guide';

class Color extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guidance: <>
      <b>Select layer:</b> click on the combo-box below and choose between water or buildings.<br/>
      <b>Choose a color:</b> click on the color you want to change the layer's color
      <div class="map-overlay top">
            <div class="map-overlay-inner">
              <fieldset>
                <label>Select layer</label>
                  <select id="layer" name="layer">
                    <option value="water">Water</option>
                      <option value="building">Buildings</option>
                  </select>
              </fieldset>
              <fieldset>
                <label>Choose a color</label>
               <div id="swatches"></div>
              </fieldset>
           </div>
        </div>
      </>
    }
  }

  componentDidMount () {
    const code = `
    mapboxgl.accessToken = 'pk.eyJ1IjoieW9uYTMzMyIsImEiOiJja2ZuamNodzAwZG92MnltcTl5eG12NGl4In0.dfVOhCUagbvm7ZXCGlEbDQ';
  var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [34.639158, 31.793061],
  zoom: 15.2
  });
   
  var swatches = document.getElementById('swatches');
  var layer = document.getElementById('layer');
  var colors = [
  '#ffffcc',
  '#a1dab4',
  '#41b6c4',
  '#2c7fb8',
  '#253494',
  '#fed976',
  '#feb24c',
  '#fd8d3c',
  '#f03b20',
  '#bd0026'
  ];
   
  colors.forEach(function (color) {
  var swatch = document.createElement('button');
  swatch.style.backgroundColor = color;
  swatch.addEventListener('click', function () {
  map.setPaintProperty(layer.value, 'fill-color', color);
  });
  swatches.appendChild(swatch);
  });
  map.addControl(new mapboxgl.FullscreenControl())
    `;
    new Function(code)();
  }


  render() {
    return (
      <>
        <Guide guidance = {this.state.guidance}/>
        <div id="map"></div>
    </>
    )
  }
}

export default Color;
