import React, { useEffect, useMemo, useRef, VFC } from 'react';
import * as THREE from 'three';
import { Icosahedron, Plane, Point, PointMaterial, Points, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Mouse3D } from '../../common/mouse3d';
import { cursor } from '../../common/store';
import { setCursor } from '../../common/utils';

export const Lights: VFC = () => {
	const lightMeshRef = useRef<THREE.Mesh>(null)
	const spriteRef = useRef<THREE.Sprite>(null)

	const cursorTexture = useTexture('/assets/images/light.png')

	const { camera } = useThree()
	const mouse3d = useMemo(() => new Mouse3D(camera), [camera])

	const lightColor = '#ff006e'

	setCursor('light')

	useEffect(() => {
		return () => mouse3d.dispose()
	}, [mouse3d])

	useFrame(() => {
		lightMeshRef.current!.position.copy(mouse3d.position)
		spriteRef.current!.visible = cursor.type === 'light'
	})

	return (
		<>
			<ambientLight intensity={0.2} color={lightColor} />
			<mesh ref={lightMeshRef}>
				<sprite ref={spriteRef} scale={0.25}>
					<spriteMaterial map={cursorTexture} color={lightColor} />
				</sprite>
				<pointLight
					color={lightColor}
					intensity={1}
					distance={15}
					decay={10}
					castShadow
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
				/>
			</mesh>
		</>
	)
}
