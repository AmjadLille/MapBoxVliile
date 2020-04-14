import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

export default function App () {
const [viewport, setViewport]= useState({
  width: "400vw",
  height: "400vh",
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 8
})
  

  
    return (
    <div>
      <ReactMapGL {...viewport}
      mapboxApiAccessToken={"pk.eyJ1IjoidmxpbGxlLXdpbGQiLCJhIjoiY2s5MGM1N3gwMDA4YzNlcm9tMDA4bHBkdiJ9.JTUAnOs5AsgSFFSMxTIOuA"}
      >

      </ReactMapGL>
        
    </div>
    )
    
      
    
  
}