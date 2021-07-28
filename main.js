// define a view
let view = new ol.View({
    projection:"EPSG:4326",
    center:[120.20427776518417, 22.99353582712871], //get from map
    zoom: 15.756211988159107
});

// // define a basemap
let OSMBaseMap = new ol.layer.Tile({
    source: new ol.source.OSM()
});

// define a stamen layer
let roadSource = new ol.layer.Tile({
    source: new ol.source.Stamen({
      layer:"toner"
  })
});

// // define array of layers
let layerArray = [roadSource];

// define our map
let map = new ol.Map({
    target: "map",
    layers: layerArray,
    view: view
});



// // image Source for Tiger
// let ImageSource = new ol.source.ImageStatic({
//     attributions :"<b>Train<b/>",
//     url:"./icon.png",
//     imageExtent:[13381854.299390066, 2631580.5558840437, 13382116.614216495, 2631743.5136445463]
// })

// // Icon Layer
// let IconLayer = new ol.layer.Image({
//     source:ImageSource
// })

// // add this layer to the map
// map.addLayer(IconLayer)


//   vector source
// let vectorSource = new ol.source.Vector({
//     features :new ol.format.GeoJSON().readFeatures(inputJSON)
// });

// // vector Style
// let vectorStyle = new ol.style.Style({
//   stroke : new ol.style.Stroke({
//     color:"#333333",
//     width:0.5,
//     lineDash:[50,5]
//   })
// });

// //  vector Layer
// let vectorLayer = new ol.layer.Vector({
//     source:vectorSource,
//     style:vectorStyle
// });

// Adding into map
// map.addLayer(vectorLayer);


// adding vector layer from geojson file
// A1
let A1source = new ol.source.Vector({
  attributions :"<b>test<b/>",
  format:new ol.format.GeoJSON(),
  url:"./2020_A1.geojson"
});
// A2
let A2source = new ol.source.Vector({
  format:new ol.format.GeoJSON(),
  url:"./2020_A2.geojson",
});

let A2layer = new ol.layer.Heatmap({
  source:A2source,
  blur:15,
  opacity:0.8
})
// let styles = [new ol.style.Style({
//   fill : new ol.style.Fill({
//       color: 'rgba(142, 226, 136, 0.1)'
//   }),
//   stroke: new ol.style.Stroke({
//       color:'#000000',
//       width:3
//   })
// })
// ];



let A1layer = new ol.layer.Vector({
  source:A1source,
  // style:styles
})

// let A2layer = new ol.layer.Vector({
//   source:A2source,
//   // style:styles
// })
  
// map.addLayer(A1layer);
map.addLayer(A2layer);

// Graticule
// let Graticule = new ol.Graticule({
//   map:map,
//   showLabels:true
// })
var graticule = new ol.layer.Graticule({
  map:map,
  showLabels:true
})



