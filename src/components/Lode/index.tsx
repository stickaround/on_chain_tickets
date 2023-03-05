import { Suspense, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Lode = () => {
  const [top, setTop] = useState(0);
  const [lode, setLode] = useState(1);

  const { scene } = useGLTF('PLANET_LODE_IMPERATOR_NEW_V.glb');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleResize, true);
    setLode(window.window.innerWidth > 768 ? 1 : 2);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleResize, true);
    };
  }, []);

  const handleResize = () => {
    setLode(window.window.innerWidth > 768 ? 1 : 2);
  };

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    setTop(scrolled);
  };

  return (
    <>
      <div
        className='h-[1000px] w-[100vw] absolute'
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      >
        {lode === 1 ? (
          <Canvas
            camera={{ near: 0.1, far: 2000, position: [0, 10, 400] }}
            orthographic={true}
          >
            <pointLight position={[0, 300, 3000]} intensity={1.3} />
            <Suspense fallback={null}>
              <primitive
                key={1}
                object={scene}
                position={[260, 220, 0]}
                scale={0.18}
                rotation={[0, Math.PI * top * 30 + (Math.PI / 2) * 3, 0]}
              />
            </Suspense>
          </Canvas>
        ) : (
          <Canvas
            camera={{ near: 0.1, far: 2000, position: [0, 10, 400] }}
            orthographic={true}
          >
            <pointLight position={[0, 300, 3000]} intensity={1.3} />
            <Suspense fallback={null}>
              <primitive
                key={2}
                object={scene}
                position={[0, 360, 0]}
                scale={0.07}
                rotation={[0, Math.PI * top * 30 + (Math.PI / 2) * 3, 0]}
              />
            </Suspense>
          </Canvas>
        )}
      </div>
    </>
  );
};

export default Lode;
