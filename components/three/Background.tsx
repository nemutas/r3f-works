import React, { useMemo, useRef, VFC } from 'react';
import * as THREE from 'three';
import { Icosahedron } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const Background: VFC = () => {
	const groupRef = useRef<THREE.Group>(null)

	const icosaProps = useMemo(() => {
		const count = 20
		const result: { scale: number; position: [number, number, number]; rotation: [number, number, number] }[] = []

		const randomScale = () => Math.random() * 0.5 + 0.2 // 0.2 ~ 0.7
		const randomPosition = () => {
			const x = (Math.random() * 2 - 1) * 3 // -3 ~ 3
			const y = (Math.random() * 2 - 1) * 2 // -2 ~ 2
			const z = (Math.random() - 1) * 2 - 1 // -3 ~ -1
			return [x, y, z] as [number, number, number]
		}
		const randomRotation = () => {
			const x = Math.random() * Math.PI * 2
			const y = Math.random() * Math.PI * 2
			const z = Math.random() * Math.PI * 2
			return [x, y, z] as [number, number, number]
		}

		;[...Array(count)].forEach(() => {
			const scale = randomScale()
			const position = randomPosition()
			const rotation = randomRotation()
			result.push({ scale, position, rotation })
		})

		return result
	}, [])

	const material = new THREE.MeshStandardMaterial({ metalness: 0.7, roughness: 0.4 })

	useFrame(({ camera }) => {
		groupRef.current!.lookAt(camera.position)
	})

	return (
		<group ref={groupRef}>
			{icosaProps.map((prop, i) => (
				<Icosahedron key={i} args={[1, 0]} material={material} {...prop} castShadow receiveShadow />
			))}
		</group>
	)
}
