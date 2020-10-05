console.log("is it working?");

import mapboxgl from "mapbox-gl";
// var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYXRhYmI3IiwiYSI6ImNrZndwcHUybjBlbGUyc3FxdDc1bjVleW8ifQ.6LsXb8-R3nCa2qKd84LV9Q";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});
