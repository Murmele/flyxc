import { loadModules } from 'esri-loader';

// List of modules to load.
const moduleNames = [
  'esri/Map',
  'esri/views/SceneView',
  'esri/layers/GraphicsLayer',
  'esri/Graphic',
  'esri/Color',
  'esri/geometry/Point',
];

// Type of the modules.
export type Api = {
  Map: typeof import('esri/Map');
  SceneView: typeof import('esri/views/SceneView');
  GraphicsLayer: typeof import('esri/layers/GraphicsLayer');
  Graphic: typeof import('esri/Graphic');
  Color: typeof import('esri/Color');
  Point: typeof import('esri/geometry/Point');
};

let apiPromise: Promise<Api> | undefined;

// Loading of the ArcGis API.
export function loadApi(): Promise<Api> {
  if (!apiPromise) {
    apiPromise = loadModules(moduleNames).then((modules) => {
      const api: any = {};
      modules.forEach((module, index) => {
        const fqName = moduleNames[index];
        const name = fqName.substring(fqName.lastIndexOf('/') + 1);
        api[name] = module;
      });
      return api;
    });
  }
  return apiPromise;
}