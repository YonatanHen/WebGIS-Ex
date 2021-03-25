import React from 'react';

class Polygon extends React.Component {

  componentDidMount () {
    const code = `mapboxgl.accessToken = 'pk.eyJ1IjoieW9uYTMzMyIsImEiOiJja2ZuamNodzAwZG92MnltcTl5eG12NGl4In0.dfVOhCUagbvm7ZXCGlEbDQ';
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/satellite-v9', //hosted style id
    center: [-91.874, 42.76], // starting position
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
    '<p><strong>' +
    rounded_area +
    '</strong></p><p>square meters</p>';
    } else {
    answer.innerHTML = '';
    if (e.type !== 'draw.delete')
    alert('Use the draw tools to draw a polygon!');
    }
    }
`;
    new Function(code)();
  }


  render() {
    return (
        <>
        <div class="calculation-box">
            <p>Draw a polygon using the draw tools.</p>
            <div id="calculated-area"></div>
        </div>
    </>
    )
  }
}

export default Polygon;

