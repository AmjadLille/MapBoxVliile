import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

export default function App () {
const [viewport, setViewport]= useState({
  width: "100vw",
  height: "100vh",
  latitude: 50.629250,
  longitude: 3.057256,
  zoom: 13
})
  

  
    return (
    <div>
      <ReactMapGL {...viewport}
      mapboxApiAccessToken={"pk.eyJ1IjoidmxpbGxlLXdpbGQiLCJhIjoiY2s5MGM1N3gwMDA4YzNlcm9tMDA4bHBkdiJ9.JTUAnOs5AsgSFFSMxTIOuA"}
      mapStyle='mapbox://styles/vlille-wild/ck90dn83w04ps1iqsg7ykglo2'
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      >

      </ReactMapGL>
        
    </div>
    )
    
      
    
  
}