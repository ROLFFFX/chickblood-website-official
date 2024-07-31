// https://cydstumpel.nl/

import {
  Image,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useState } from "react";
import * as THREE from "three";
import "./util";

export const MemberCarousel = ({ fov }) => (
  <Canvas camera={{ position: [0, 0, 90], fov: fov }} background="white">
    <fog attach="fog" args={["#a79", 8.5, 13]} />
    <ScrollControls pages={4} infinite>
      <Rig rotation={[0, 0, 0.15]}>
        <Carousel />
      </Rig>
      <Banner position={[0, -0.15, 0]} />
    </ScrollControls>
  </Canvas>
);

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
    state.events.update(); // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.4 }) {
  return (
    <>
      {/* chiyokoo */}
      <Card
        key={0}
        url="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/756898c5-9460-488f-c223-439abb929b00/public"
        position={[Math.sin(0) * radius, 0, Math.cos(0) * radius]}
        rotation={[0, Math.PI, 0]}
      />
      {/* chzaza */}
      <Card
        key={1}
        url="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5716223e-2100-4e46-dbba-319b40a8b800/public"
        position={[
          Math.sin(Math.PI / 3) * radius,
          0,
          Math.cos(Math.PI / 3) * radius,
        ]}
        rotation={[0, Math.PI + Math.PI / 3, 0]}
      />
      {/* joshua */}
      <Card
        key={2}
        url="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/93d19096-0aae-4f72-1ab0-b03d10e59c00/public"
        position={[
          Math.sin((2 * Math.PI) / 3) * radius,
          0,
          Math.cos((2 * Math.PI) / 3) * radius,
        ]}
        rotation={[0, Math.PI + (2 * Math.PI) / 3, 0]}
      />
      {/* rita */}
      <Card
        key={3}
        url="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/e3848fa4-faae-4bf6-ebe8-7ca438f68000/public"
        position={[Math.sin(Math.PI) * radius, 0, Math.cos(Math.PI) * radius]}
        rotation={[0, Math.PI + Math.PI, 0]}
      />
      {/* rolf */}
      <Card
        key={4}
        url="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f2064d80-c241-4aab-bf4a-2e279c774000/public"
        position={[
          Math.sin((4 * Math.PI) / 3) * radius,
          0,
          Math.cos((4 * Math.PI) / 3) * radius,
        ]}
        rotation={[0, Math.PI + (4 * Math.PI) / 3, 0]}
      />
      {/* tzuchi */}
      <Card
        key={5}
        url="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f4b8e394-bd5a-47f9-917f-3c4e6a925800/public"
        position={[
          Math.sin((5 * Math.PI) / 3) * radius,
          0,
          Math.cos((5 * Math.PI) / 3) * radius,
        ]}
        rotation={[0, Math.PI + (5 * Math.PI) / 3, 0]}
      />
    </>
  );
}

function Card({ url, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const pointerOver = (e) => {
    e.stopPropagation();
    hover(true);
  };
  const pointerOut = () => hover(false);
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.1 : 1, 0.1, delta);
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.25 : 0.1,
      0.2,
      delta
    );
    easing.damp(ref.current.material, "zoom", hovered ? 0.9 : 1, 0.5, delta);
  });
  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
}

function Banner(props) {
  const ref = useRef();
  const texture = useTexture("pics/cb2024.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.material.time.value += Math.abs(scroll.delta) * 4;
    ref.current.material.map.offset.x += delta / 2;
  });
  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[20, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}
