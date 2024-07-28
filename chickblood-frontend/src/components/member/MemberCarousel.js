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
      <Card
        key={0}
        url="/pics/member/chiyokoo.png"
        position={[Math.sin(0) * radius, 0, Math.cos(0) * radius]}
        rotation={[0, Math.PI, 0]}
      />
      <Card
        key={1}
        url="/pics/member/chzaza.png"
        position={[
          Math.sin(Math.PI / 3) * radius,
          0,
          Math.cos(Math.PI / 3) * radius,
        ]}
        rotation={[0, Math.PI + Math.PI / 3, 0]}
      />
      <Card
        key={2}
        url="/pics/member/joshua.png"
        position={[
          Math.sin((2 * Math.PI) / 3) * radius,
          0,
          Math.cos((2 * Math.PI) / 3) * radius,
        ]}
        rotation={[0, Math.PI + (2 * Math.PI) / 3, 0]}
      />
      <Card
        key={3}
        url="/pics/member/rita.png"
        position={[Math.sin(Math.PI) * radius, 0, Math.cos(Math.PI) * radius]}
        rotation={[0, Math.PI + Math.PI, 0]}
      />
      <Card
        key={4}
        url="/pics/member/rolf.png"
        position={[
          Math.sin((4 * Math.PI) / 3) * radius,
          0,
          Math.cos((4 * Math.PI) / 3) * radius,
        ]}
        rotation={[0, Math.PI + (4 * Math.PI) / 3, 0]}
      />
      <Card
        key={5}
        url="/pics/member/tzuchi.png"
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
