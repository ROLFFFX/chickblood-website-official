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

export const MemberCarousel = () => (
  <Canvas camera={{ position: [0, 0, 100], fov: 15 }} background="white">
    <fog attach="fog" args={["#a79", 8.5, 12]} />
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
      <Card
        key={0}
        url="pics/cbicon_red.png"
        position={[Math.sin(0) * radius, 0, Math.cos(0) * radius]}
        rotation={[0, Math.PI, 0]}
      />
      <Card
        key={1}
        url="pics/cbicon_red.png"
        position={[
          Math.sin(Math.PI / 3) * radius,
          0,
          Math.cos(Math.PI / 3) * radius,
        ]}
        rotation={[0, Math.PI + Math.PI / 3, 0]}
      />
      <Card
        key={2}
        url="pics/cbicon_red.png"
        position={[
          Math.sin((2 * Math.PI) / 3) * radius,
          0,
          Math.cos((2 * Math.PI) / 3) * radius,
        ]}
        rotation={[0, Math.PI + (2 * Math.PI) / 3, 0]}
      />
      <Card
        key={3}
        url="pics/cbicon_red.png"
        position={[Math.sin(Math.PI) * radius, 0, Math.cos(Math.PI) * radius]}
        rotation={[0, Math.PI + Math.PI, 0]}
      />
      <Card
        key={4}
        url="pics/cbicon_red.png"
        position={[
          Math.sin((4 * Math.PI) / 3) * radius,
          0,
          Math.cos((4 * Math.PI) / 3) * radius,
        ]}
        rotation={[0, Math.PI + (4 * Math.PI) / 3, 0]}
      />
      <Card
        key={5}
        url="pics/icons/test.webp"
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
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.1, 0.2, delta); // 1.1 is the current zoom ratio
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
  const texture = useTexture("pics/icons/test.webp");
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
        map-repeat={[30, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}
