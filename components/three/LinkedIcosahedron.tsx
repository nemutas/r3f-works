import gsap from 'gsap';
import React, { useEffect, useRef, VFC } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Face, VertexNode } from 'three/examples/jsm/math/ConvexHull';
import { useGLTF, useTexture } from '@react-three/drei';
import { Size, ThreeEvent, useFrame, useThree } from '@react-three/fiber';
import { icosaState } from '../../common/store';
import { Work } from '../../common/types';
import { setCursor } from '../../common/utils';
import { works } from '../../resources/works';

type GLTFResult = GLTF & {
	nodes: {
		[name: string]: THREE.Mesh
	}
}

export const LinkedIcosahedron: VFC<JSX.IntrinsicElements['group']> = props => {
	const group = useRef<THREE.Group>()

	// import model
	const { nodes } = (useGLTF('/assets/models/icosahedron_faces.glb') as unknown) as GLTFResult

	const ray = new THREE.Ray()
	const target = new THREE.Vector3()
	const a = new THREE.Vector3()
	const b = new THREE.Vector3()
	const c = new THREE.Vector3()
	let isAnimeCompleted = true

	useFrame(({ camera, size }) => {
		setIcoScale(size)

		ray.lookAt(camera.position)

		let intersectMesh: THREE.Mesh | null = null

		group.current!.children.forEach(obj => {
			const mesh = obj as THREE.Mesh
			const p = mesh.geometry.attributes.position.array
			a.set(p[0], p[1], p[2])
			b.set(p[3], p[4], p[5])
			c.set(p[6], p[7], p[8])
			const result = ray.intersectTriangle(a, b, c, false, target)
			if (result) intersectMesh = mesh
		})

		if (intersectMesh) {
			const key = (intersectMesh as THREE.Mesh).name

			if (icosaState.frontFace !== key && isAnimeCompleted) {
				setFrontFace(key)
			}
		}
	})

	const setIcoScale = (size: Size) => {
		const ratio = size.width / 1000

		let scale = Math.min(ratio, 1)
		scale = Math.max(0.5, scale)

		group.current!.scale.set(scale, scale, scale)
	}

	const setFrontFace = (key: string) => {
		isAnimeCompleted = false
		gsap.to('.anime-balloon-title', { y: 60, height: '0%', duration: 0.3, ease: 'power2.in' })
		gsap.to('.anime-balloon-description', {
			y: -20,
			height: '0%',
			duration: 0.3,
			ease: 'power2.in',
			onComplete: () => {
				icosaState.frontFace = key
				isAnimeCompleted = true
			}
		})
	}

	return (
		<group ref={group} {...props} dispose={null}>
			{Object.keys(works).map((key, i) => (
				<TriangleFace key={i} geometry={nodes[`Icosahedron_${i + 1}`].geometry} accessKey={key} work={works[key]} />
			))}
		</group>
	)
}

// ========================================================
type TriangleFaceProps = {
	geometry: THREE.BufferGeometry
	accessKey: string
	work: Work
}

const TriangleFace: VFC<TriangleFaceProps> = props => {
	const { geometry, accessKey, work } = props

	// import texture
	const texture = useTexture(`/assets/images/thumbnails/${work.thumbnail}.png`)
	texture.flipY = false
	texture.wrapS = THREE.MirroredRepeatWrapping
	texture.wrapT = THREE.MirroredRepeatWrapping

	const shader: THREE.Shader = {
		uniforms: {
			u_texture: { value: texture }
		},
		vertexShader: vertexShader,
		fragmentShader: fragmentShader
	}

	const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
		setCursor('pointer')
	}

	const handlePointerLeave = (e: ThreeEvent<PointerEvent>) => {
		setCursor('light')
	}

	const handleClick = (e: ThreeEvent<MouseEvent>) => {
		window.open(work.link, '_blank', 'noopener noreferrer')
	}

	return (
		<mesh
			name={accessKey}
			geometry={geometry}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			onClick={handleClick}>
			<shaderMaterial args={[shader]} />
		</mesh>
	)
}

const vertexShader = `
varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_mvPos;

void main() {
  v_normal = normalize(normalMatrix * normal);
  v_uv = uv + v_normal.xy;

  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
	v_mvPos = normalize(mvPos.xyz);

  gl_Position = projectionMatrix * mvPos;
}
`

const fragmentShader = `
uniform sampler2D u_texture;
varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_mvPos;

float Fresnel(vec3 eyeVector, vec3 worldNormal) {
	return pow(1.0 + dot(eyeVector, worldNormal), 3.0);
}

void main() {
  vec2 uv = v_uv;
  // uv.x *= 315.0 / 600.0;
  // uv.x += 0.2375; // ((600 - 315) / 2) / 600

  vec4 texture = texture2D(u_texture, uv);

  // fresnel reflect
  float fresnel = Fresnel(v_mvPos, v_normal) * 0.5;
  vec4 color = mix(texture, vec4(1.0), fresnel);

  gl_FragColor = color;
  // gl_FragColor = vec4(vec3(fresnel), 1.0);
}
`
