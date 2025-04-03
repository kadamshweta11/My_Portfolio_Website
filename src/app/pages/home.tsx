
// "use client";
// import React, { Suspense, useRef, useEffect, useState } from "react";
// import { Canvas, useFrame, extend } from "@react-three/fiber";
// import { OrbitControls, useFBX, useAnimations } from "@react-three/drei";
// import * as THREE from "three";

// extend({ Object3D: THREE.Object3D });

// const HomeAvatar = () => {
//   const group = useRef<THREE.Group | null>(null);
//   const fbx = useFBX("/avatar/Waving.fbx");
//   const { actions, mixer } = useAnimations(fbx?.animations ?? [], group);

//   useEffect(() => {
//     if (actions && fbx?.animations.length > 0) {
//       mixer.stopAllAction();
//       const action = actions[fbx.animations[0].name];
//       if (action) {
//         action.reset().fadeIn(0.5).play();
//       }
//     }
//   }, [actions, fbx?.animations, mixer]);

//   useFrame((state, delta) => {
//     if (mixer) mixer.update(delta);
//   });

//   if (!fbx) return null;

//   return (
//     <group ref={group}>
//       <primitive object={fbx} scale={2.5} position={[0, -2.5, 0]} />
//     </group>
//   );
// };

// const TypewriterEffect = ({ text }: { text: string }) => {
//   const [displayText, setDisplayText] = useState("");
//   const [index, setIndex] = useState(0);
//   const speed = 150;

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText((prev) => prev + text[index]);
//         setIndex(index + 1);
//       }, speed);
//       return () => clearTimeout(timeout);
//     } else {
//       setTimeout(() => {
//         setDisplayText("");
//         setIndex(0);
//       }, 2000);
//     }
//   }, [index, text]);

//   return <h2 className="text-3xl font-semibold">{displayText}</h2>;
// };

// const Home = () => {
//   const text = "I am a Web Developer, Creator, Software Engineer";
//   return (
//     <div className="flex h-screen bg-black bg-gradient-to-b from-black to-gray-900 text-white">
//       {/* left */}
//       <div className="flex justify-center items-center w-1/2 h-screen mt-0">
//         <Canvas camera={{ position: [0, 1, 7], fov: 50 }}>
//           <ambientLight intensity={1} />
//           <directionalLight position={[10, 10, 5]} intensity={2} />
//           <pointLight position={[0, 10, 0]} intensity={2} />
//           <Suspense fallback={null}>
//             <HomeAvatar />
//           </Suspense>
//         </Canvas>
//       </div>
     

//       {/* right */}

//       {/* <div className="flex h-screen bg-black bg-gradient-to-b from-black to-gray-900 text-white"> */}
//       {/* Left Section Centered */}
//       <div className="flex flex-col justify-center items-start p-10 w-2/3 text-left space-y-4">
//         <h1 className="text-6xl sm:text-7xl md:text-9xl font-thin text-transparent bg-clip-text text-slate-800">Hi, I am</h1>
//         <h2 className="text-5xl sm:text-6xl md:text-8xl font-thin text-transparent bg-clip-text text-slate-800">Shweta</h2>
//         <TypewriterEffect text={text} />
//       </div>
      
//     </div>
//   );
// };

// export default Home;


"use client";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, useFBX, useAnimations } from "@react-three/drei";
import * as THREE from "three";

extend({ Object3D: THREE.Object3D });

const HomeAvatar = () => {
  const group = useRef<THREE.Group | null>(null);
  const fbx = useFBX("/avatar/Waving.fbx");
  const { actions, mixer } = useAnimations(fbx?.animations ?? [], group);

  useEffect(() => {
    if (actions && fbx?.animations.length > 0) {
      mixer.stopAllAction();
      const action = actions[fbx.animations[0].name];
      if (action) {
        action.reset().fadeIn(0.5).play();
      }
    }
  }, [actions, fbx?.animations, mixer]);

  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);
  });

  if (!fbx) return null;

  return (
    <group ref={group}>
      <primitive object={fbx} scale={2.5} position={[0, -2.5, 0]} />
    </group>
  );
};

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const speed = 150;

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 2000);
    }
  }, [index, text]);

  return <h4 className="text-3xl font-semibold">{displayText}</h4>;
};

const Home = () => {
  const text = "I am a Web Developer, Creator, Software Engineer";
  return (
    <div className="flex h-screen bg-black bg-gradient-to-b from-black to-gray-900 text-white">
      {/* left */}
      <div className="flex justify-center items-center w-1/2 h-screen mt-0">
        <Canvas camera={{ position: [0, 1, 7], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <pointLight position={[0, 10, 0]} intensity={2} />
          <Suspense fallback={null}>
            <HomeAvatar />
          </Suspense>
        </Canvas>
      </div>
     
      {/* right */}
      <div className="flex flex-col justify-center items-start p-10 w-2/3 text-left space-y-4">
      <p className="text-xl sm:text-2xl md:text-3xl font-thin text-transparent bg-clip-text bg-gradient-to-r text-white">
  Hallo! I am
</p>

<h1 className="text-[12vw] sm:text-[15vw] md:text-[20vw] lg:text-[25vw] font-thin text-transparent bg-clip-text bg-gradient-to-r text-white leading-none tracking-tight overflow-hidden whitespace-nowrap">
  Shweta Kadam
</h1>



        <TypewriterEffect text={text} />
      </div>
      
    </div>
  );
};

export default Home;