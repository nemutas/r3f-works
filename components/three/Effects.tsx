import { useEffect, useRef, VFC } from 'react';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { DistortionPass } from './DistortionPass';

extend({ EffectComposer, RenderPass, ShaderPass })

export const Effects: VFC = () => {
	const composerRef = useRef<EffectComposer>(null)
	const { gl, scene, camera, size } = useThree()

	useEffect(() => {
		composerRef.current!.setSize(size.width, size.height)
	}, [size])

	useFrame(() => {
		composerRef.current!.render()
	}, 1)

	return (
		<effectComposer ref={composerRef} args={[gl]}>
			<renderPass attachArray="passes" args={[scene, camera]} />
			<DistortionPass progress={1} />
			<shaderPass attachArray="passes" args={[GammaCorrectionShader]} />
		</effectComposer>
	)
}
