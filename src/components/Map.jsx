import React, { Component } from 'react';
import esriLoader from 'esri-loader';
import './Map.css';

class Map extends Component {

  componentDidMount() {
    /**
     * 
     *  this makes sure the arcGIS JS api is loaded
     *  in this case the spicific ver 3.15 is loaded
     *  if it wasn't specified it would load the 
     *  latest 4.x by default
     * 
     *  -note: in ./index.html the api can also be loaded by a script tag
     *         the prop data-esri-loader helps the check esriLoader.isLoaded() know the script was loaded
     * 
     *  <script 
     *    src="arcgis_js_api/library/3.15/3.15/init.js" 
     *    data-esri-loader="loaded">
     *  </script>
     * 
     *        
     * 
     **/
    if (!esriLoader.isLoaded()) {
      const options = {
        url: 'https://js.arcgis.com/3.22/init.js'
        /*
        dojoConfig: {
          async: true,
          packages: [
            {
              location: '/path/to/fcl',
              name: 'fcl'
            }
          ]
        }*/
      };
      esriLoader.loadModules(['esri/map'], options)
        .then(([Map]) => {
          this.createMap();
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      this.createMap();
    }

  };

  render() {
    return (
      <div id='map'></div>
    );
  };

  createMap() {
    if(this.props.useVector){
      /**
      * 
      *  vector tile map
      *
      */
      esriLoader.loadModules(['esri/map', 'esri/layers/VectorTileLayer'])
      .then(([Map, VectorTileLayer]) => {
        const center = [-120.80593828121732, 48.06993896695619]; // lon, lat
        let map = new Map("map", {
                center: center,
                zoom: 6,
                logo: false,
                fadeOnZoom: true,
                navigationMode: "css-transforms"
            });

            var vtlayer = new VectorTileLayer("https://www.arcgis.com/sharing/rest/content/items/bf79e422e9454565ae0cbe9553cf6471/resources/styles/root.json", 
                {"opacity": 1.4});
            map.addLayer(vtlayer);
      })
      .catch(err => {
        console.error(err);
      });
    }else{
      /**
      * 
      *  image tile map
      *
      */
      esriLoader.loadModules(['esri/map'])
      .then(([Map]) => {
        let map = new Map('map', {
          center: [-118, 34.5],
          zoom: 8,
          sliderPosition: 'top-right',
          basemap: 'dark-gray'
        });
      })
      .catch(err => {
        console.error(err);
      });
    }

  };

};

Map.defaultProps = {useVector: true};
export default Map;
