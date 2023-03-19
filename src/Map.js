// react
import React, { useState, useEffect, useRef } from "react";

/* Stylesheets */
import "ol/ol.css";
import "ol-ext/dist/ol-ext.css";

/* Libraries */
import { theme, ConfigProvider } from "antd";
import DarkModeToggle from "react-dark-mode-toggle";

/* OL, OL-Ext */
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import Link from "ol/interaction/Link.js";
import View from "ol/View.js";
import { get as getProjection, transformExtent } from "ol/proj.js";
import LayerSwitcherImage from "ol-ext/control/LayerSwitcherImage";
import CanvasScaleLine from "ol-ext/control/CanvasScaleLine";
import GeolocationButton from "ol-ext/control/GeolocationButton";
import { FullScreen, defaults as defaultControls } from "ol/control.js";

import { fromArrayBuffer } from "geotiff";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";

const { defaultAlgorithm, darkAlgorithm } = theme;
const projection = getProjection("EPSG:4326");
let layers = [],
  switcher;
let initialMap;

let osm = new TileLayer({
  baseLayer: true,
  title: "OpenStreetMap",
  visible: true,
  source: new OSM(),
});

var geoTIFFRGB = new ImageLayer({
  name: "GeoTIFF",
  title: "GeoTIFF",
  visible: true,
});

function MapWrapper() {
  const [map, setMap] = useState();
  const [color, setColor] = useState("#fff");
  const [olColor, setolColor] = useState("#333");
  const [olFontcolor, setolFontcolor] = useState("#fff");
  const [olHighcolor, setolHighcolor] = useState("#fff");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const mapElement = useRef();

  const mapRef = useRef();
  mapRef.current = map;

  const modeChange = () => {
    setIsDarkMode(!isDarkMode);
    isDarkMode ? setColor("#fff") : setColor("#000");
    isDarkMode ? setolColor("#333") : setolColor("#fff");
    isDarkMode ? setolHighcolor("#fff") : setolHighcolor("#333");
    isDarkMode ? setolFontcolor("#fff") : setolFontcolor("#333");
    document.documentElement.style.setProperty(
      "--ol-background-color",
      olColor
    );
    document.documentElement.style.setProperty(
      "--ol-subtle-foreground-color",
      olFontcolor
    );
    document.documentElement.style.setProperty(
      "--ol-accent-background-color",
      olHighcolor
    );
  };

  layers = [osm, geoTIFFRGB];

  useEffect(() => {
    if (!mapRef.current) {
      initialMap = new Map({
        controls: defaultControls().extend([
          new FullScreen({
            className: "ol-full-screen",
            tipLabel: "Toggle full-screen",
          }),
        ]),
        layers: layers,
        target: mapElement.current,
        view: new View({
          projection: projection,
          center: [73.0479, 33.6844],
          zoom: 11,
        }),
      });

      // set map onclick handler
      initialMap.on("click", handleMapClick);

      switcher = new LayerSwitcherImage({
        show_progress: true,
        extent: false,
        trash: false,
      });

      initialMap.addControl(switcher);

      var scaleLineControl = new CanvasScaleLine();
      initialMap.addControl(scaleLineControl);

      var geoloc = new GeolocationButton();
      initialMap.addControl(geoloc);

      initialMap.addInteraction(new Link());
      setMap(initialMap);
    }
  }, []);

  // map click handler
  const handleMapClick = (event) => {};
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <div ref={mapElement} id="map" className="map-container">
        <div
          style={{
            position: "fixed",
            zIndex: 500,
            top: "4em",
            bottom: "60%",
          }}
        >
          <DarkModeToggle
            onChange={modeChange}
            checked={isDarkMode}
            size={45}
          />
          <DragDropFile />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default MapWrapper;

let width, height, extent, geoKeys;

function DragDropFile() {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = async (e) => {
    e[0]
      .arrayBuffer()
      .then(function (arrayBuffer) {
        return fromArrayBuffer(arrayBuffer);
      })
      .then(function (tiff) {
        return tiff.getImage();
      })
      .then(function (image) {
        geoKeys = image.getGeoKeys();

        width = image.getWidth();
        height = image.getHeight();
        extent = image.getBoundingBox();
        return image.readRGB();
      })
      .then(function (rgb) {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        const data = context.getImageData(0, 0, width, height);
        const rgba = data.data;
        let j = 0;
        for (let i = 0; i < rgb.length; i += 3) {
          rgba[j] = rgb[i];
          rgba[j + 1] = rgb[i + 1];
          rgba[j + 2] = rgb[i + 2];
          rgba[j + 3] = 255;
          j += 4;
        }
        context.putImageData(data, 0, 0);
        geoTIFFRGB.setSource(
          new Static({
            url: canvas.toDataURL(),
            projection: "EPSG:4326",
            imageExtent: transformExtent(extent, "EPSG:4326", "EPSG:4326"),
          })
        );
      });
  };

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}
      >
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button" onClick={onButtonClick}>
            Upload a file
          </button>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
}
