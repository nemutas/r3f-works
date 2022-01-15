import React, { Suspense, VFC } from 'react';
import { Box, OrbitControls } from '@react-three/drei';
import { Canvas, RootState } from '@react-three/fiber';
import { Background } from './Background';
import { Effects } from './Effects';
import { Lights } from './Lights';
import { LinkedIcosahedron } from './LinkedIcosahedron';

export default function TCanvas() {
	return (
		<Canvas
			camera={{
				position: [0, 0.5, 3],
				fov: 50,
				aspect: window.innerWidth / window.innerHeight,
				near: 0.1,
				far: 2000
			}}
			dpr={window.devicePixelRatio}
			linear
			shadows>
			{/* scene */}
			<color attach="background" args={['#000']} />
			{/* camera controller */}
			<OrbitControls attach="orbitControls" rotation={[0, Math.PI, 0]} enableZoom={false} enablePan={false} />

			{/* objects */}
			<Suspense fallback={null}>
				<Lights />
				<LinkedIcosahedron />
			</Suspense>
			<Background />
			{/* effects */}
			<Effects />
		</Canvas>
	)
}
