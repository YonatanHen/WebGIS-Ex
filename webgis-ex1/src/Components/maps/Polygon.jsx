import React from 'react';
import Guide from '../guide';
import Menu from '../Menu';

class Polygon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guidance:<>
      <b>Draw polygon:</b> click on the top-right square symbol inside the map, then draw the desired polygon - 
      click on the left mouse button to mark his edges, double click will draw the last edge.<br/>
      <b>Erase polygon:</b> Click on the trash icon in the top-right inside the map. <br/>
      <b>Relocate polygon: </b> When polygon is appearing on the map, be aware about the color
      of the polygon - if it's blue, click on him and then you can relocate it to new place.<br/>
      <b>Modify polygon: </b> click on the dots in the middle of polygon sides to resize polygon, to delete dot, click on
      the desired edge and then on delete button in the keyboard.
      </>
    }
  }

  componentDidMount () {
    const code = `mapboxgl.accessToken = 'pk.eyJ1IjoieW9uYTMzMyIsImEiOiJja2ZuamNodzAwZG92MnltcTl5eG12NGl4In0.dfVOhCUagbvm7ZXCGlEbDQ';
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', //hosted style id
    center: [34.639158, 31.793061], // starting position
    zoom: 12 // starting zoom
    });
     
    var draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
    polygon: true,
    trash: true
    }
    });
    map.addControl(draw);
     
    map.on('draw.create', updateArea);
    map.on('draw.delete', updateArea);
    map.on('draw.update', updateArea);
     
    function updateArea(e) {
    var data = draw.getAll();
    var answer = document.getElementById('calculated-area');
    if (data.features.length > 0) {
    var area = turf.area(data);
    // restrict to area to 2 decimal points
    var rounded_area = Math.round(area * 100) / 100;
    answer.innerHTML =
    '<strong>' +
    rounded_area +
    '</strong><br/>square meters in total';
    } else {
    answer.innerHTML = '';
    if (e.type !== 'draw.delete')
    alert('Use the draw tools to draw a polygon!');
    }
    }
    map.addControl(new mapboxgl.FullscreenControl())
    var layerList = document.getElementById('menu');
    var inputs = layerList.getElementsByTagName('input');
 
    function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
 
    for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
    }
`;
    new Function(code)();
  }


  render() {
    return (
        <>
          <div className="flex-wrapper">
          <Guide guidance = {this.state.guidance}/>
            <Menu/>
          </div>
          <div class="calculation-box">
              <p>
                Draw a polygon using the draw tools.
                <div id="calculated-area"></div>
              </p>
          </div>
         </>
    )
  }
}

export default Polygon;