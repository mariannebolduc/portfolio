import React, { useEffect, useRef } from "react";
import TWEEN from "tween.ts";
import "./cardParallaxStyles.css";
import Layer from "../../models/Layer";
import { useState } from "react";

interface Props {
  layers: Layer[];
  loadingImage: string;
}

const CardParallax: React.FC<Props> = ({ layers, loadingImage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null);
  let moving = false;

  let pointer_initial = {
    x: 0,
    y: 0,
  };
  let pointer = {
    x: 0,
    y: 0,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const drawCanvas = (
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => {
    if (canvasRef && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // This is needed for the animation to snap back to center when you release mouse or touch
      TWEEN.update(TWEEN.now());

      // Calculate how much the canvas should be rotated
      var rotate_x = pointer.y * -0.0005;
      var rotate_y = pointer.x * 0.0005;

      // Actually rotate the canvas
      canvas.style.transform =
        "rotateX(" + rotate_x + "deg) rotateY(" + rotate_y + "deg)";

      //   Loop through each layer in the list and draw it to the canvas
      layers.forEach((layer, index) => {
        // Calculate what the position of the layer should be (getOffset function is below)
        layer.position = getOffset(layer);

        // If the layer has a blend mode set, use that blend mode, otherwise use normal
        if (layer.blend) {
          context.globalCompositeOperation =
            layer.blend as GlobalCompositeOperation;
        } else {
          context.globalCompositeOperation =
            "normal" as GlobalCompositeOperation;
        }
        // Set the opacity of the layer
        context.globalAlpha = layer.opacity;
        // Draw the layer into the canvas context
        context.drawImage(layer.image, layer.position.x, layer.position.y);
      });
    }
  };

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (context) {
      let animationFrameId: number;

      //Our draw came here
      const render = () => {
        drawCanvas(context, canvasRef.current);
        animationFrameId = window.requestAnimationFrame(render);
      };

      let loadCounter = 0;

      layers.forEach((layer, index) => {
        layer.image.onload = () => {
          loadCounter++;

          if (loadCounter >= layers.length) {
            setIsLoaded(true);
            // Start the render Loop!
            render();
          }
        };
        // This actually tells the image to load
        layer.image.src = layer.src;
      });

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [drawCanvas, layers]);

  const onMouseMoveDiv = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (containerRef.current) {
      const containerBounds = containerRef.current.getBoundingClientRect();

      if (!moving) {
        moving = true;
        pointer_initial.x = containerBounds.left + containerBounds.width / 2; // 1242;
        pointer_initial.y = containerBounds.top + containerBounds.height / 2; // 410;
      }

      // Only run this if touch or mouse click has started
      if (moving === true) {
        let current_x = 0;
        let current_y = 0;

        current_x = event.clientX;
        current_y = event.clientY;

        // Set pointer position to the difference between current position and initial position
        pointer.x = current_x - pointer_initial.x;
        pointer.y = current_y - pointer_initial.y;
      }
    }
  };

  const onMouseLeaveDiv = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    moving = false;

    TWEEN.removeAll();
    // This starts the animation to reset the position of all layers when you stop moving them
    var pointer_tween = new TWEEN.Tween(pointer)
      .to({ x: 0, y: 0 }, 300)
      .easing(TWEEN.Easing.Back.Out)
      .start();
  };

  const getOffset = (layers: any): any => {
    var touch_multiplier = 0.15;
    var touch_offset_x = pointer.x * layers.z_index * touch_multiplier;
    var touch_offset_y = pointer.y * layers.z_index * touch_multiplier;

    return {
      x: touch_offset_x,
      y: touch_offset_y,
    };
  };

  return (
    <div
      className="image-container"
      onMouseLeave={onMouseLeaveDiv}
      onMouseMove={onMouseMoveDiv}
      ref={containerRef}
    >
      <canvas
        className="canvas"
        ref={canvasRef}
        width={900}
        height={1000}
      ></canvas>
      {!isLoaded && <img className={"loading-img"} src={loadingImage} alt="" />}
    </div>
  );
};

export default CardParallax;
