import Position from "./Position";

export default interface Layer {
  image: HTMLImageElement;
  src: string;
  z_index: number;
  position: Position;
  blend: GlobalCompositeOperation | null;
  opacity: number;
}
