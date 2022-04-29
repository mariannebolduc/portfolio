import {
  C01eD,
  C01LB,
  C01MEJ,
  C02eD,
  C02LB,
  C02MEJ,
  C03CADRE,
  C04eD,
  C04LB,
  C04MEJ,
  C05eD,
  C05LB,
  C05MEJ,
  eD_Load,
  LB_Load,
  MEJ_Load,
} from "../../assets/images";
import Layer from "../../models/Layer";

export const getParallaxImages = (
  projectName: string
): { layers: Layer[]; loadingImage: string } => {
  switch (projectName) {
    case "eyeDesigner":
      return { layers: layerListEyeDesigner, loadingImage: eD_Load };

    case "Lightbeans":
      return { layers: layerListLightbeans, loadingImage: LB_Load };

    case "Math en jeu":
      return { layers: layerListMEJ, loadingImage: MEJ_Load };

    default:
      return { layers: [], loadingImage: "" };
  }
};

const layerListEyeDesigner: Layer[] = [
  {
    image: new Image(),
    src: C05eD,
    z_index: -2.25,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C04eD,
    z_index: -1,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C03CADRE,
    z_index: 0,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C02eD,
    z_index: 0.8,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C01eD,
    z_index: 2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
];

const layerListLightbeans: Layer[] = [
  {
    image: new Image(),
    src: C05LB,
    z_index: -2.25,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C04LB,
    z_index: -1,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C03CADRE,
    z_index: 0,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C02LB,
    z_index: 0.8,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C01LB,
    z_index: 2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
];

const layerListMEJ: Layer[] = [
  {
    image: new Image(),
    src: C05MEJ,
    z_index: -2.25,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C04MEJ,
    z_index: -1,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C03CADRE,
    z_index: 0,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C02MEJ,
    z_index: 0.8,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: C01MEJ,
    z_index: 2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
];
