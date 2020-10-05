import mapboxgl from "mapbox-gl";

const createMarker = function(type, coordinates){
    console.log("in here")
    const markerElem = document.createElement("div");
    markerElem.style.width = "32px";
    markerElem.style.height = "39px";
    if(type === 'hotel'){
        markerElem.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    }else if(type === 'restaurant'){
        markerElem.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }else if(type === 'activity'){
        markerElem.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }
    let myMap = new mapboxgl.Marker(markerElem).setLngLat(coordinates);
    return myMap;
}

export default createMarker;