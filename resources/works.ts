import { Work } from '../common/types';

export const works: { [key: string]: Work } = {
	// 1
	work1: {
		title: 'Radial Particles',
		thumbnail: 'radial_particles',
		description: `Shaderを使用したアプリケーションです。
		GPGPUの概念に基づいて、524,288個のParticlesを描画しています。`,
		link: 'https://nemutas.github.io/r3f-gpgpu-particles/',
		github: 'https://github.com/nemutas/r3f-gpgpu-particles',
		qiita: 'https://qiita.com/nemutas/items/b40baa2a1f33fae6b20d'
	},
	// 2
	work2: {
		title: 'Icosahedron Screen',
		thumbnail: 'icosahedron_screen',
		description: `Shaderを使用したアプリケーションです。
		ICO球の面をフラットシェーディングして、さらにTextureの屈折、切り替えを行っています。`,
		link: 'https://nemutas.github.io/r3f-icosahedron-screen/',
		github: 'https://github.com/nemutas/r3f-icosahedron-screen',
		qiita: 'https://qiita.com/nemutas/items/3d6bf5d251ce10cd4200'
	},
	// 3
	work3: {
		title: 'Homunculus Effect',
		thumbnail: 'homunculus_effect',
		description: `Post-processingを使用したアプリケーションです。
    「株式会社ホムンクルス」のサイトで使用されている、Distortion Effect（ねじれ効果）・Ripple Effect（波紋効果）を実装しました。`,
		link: 'https://nemutas.github.io/r3f-homunculus/',
		github: 'https://github.com/nemutas/r3f-homunculus',
		qiita: 'https://qiita.com/nemutas/items/b052af50776a8fcc1593'
	},
	// 4
	work4: {
		title: '蠕動 - Zendo -',
		thumbnail: 'zendo',
		description: `Shaderを使用したアプリケーションです。
		球体の頂点にサイン波を与えて、有機的な動きを表現しました。`,
		link: 'https://nemutas.github.io/r3f-zendo/',
		github: 'https://github.com/nemutas/r3f-zendo',
		qiita: 'https://qiita.com/nemutas/items/38a33130e8bf3564769f'
	},
	// 5
	work5: {
		title: 'Striped Pattern Sphere',
		thumbnail: 'striped_pattern_sphere',
		description: `Shaderを使用したアプリケーションです。
		球体にDistortion Effect（ねじれ効果）を使用することで、縞模様をランダムにアニメーションさせています。`,
		link: 'https://mrnqk.csb.app/',
		sandbox: 'https://codesandbox.io/s/striped-pattern-sphere-using-shader-with-r3f-mrnqk'
	},
	// 6
	work6: {
		title: 'Godrays Effect',
		thumbnail: 'godrays_effect',
		description: `Post-processingを使用したアプリケーションです。
		GodRays Effectを使用して、3Dモデルから後光が挿すような表現をしました。`,
		link: 'https://nemutas.github.io/r3f-godrays-effect/',
		github: 'https://github.com/nemutas/r3f-godrays-effect',
		qiita: 'https://qiita.com/nemutas/items/541fad4db8c5f3221a68'
	},
	// 7
	work7: {
		title: 'Mixamo Animation',
		thumbnail: 'mixamo_animation',
		description: `glbファイルを使用したアプリケーションです。
		Adobe Mixamoから3Dモデル・アニメーションをインポートして、コントローラーで制御できるようにしました。`,
		link: 'https://nemutas-mixamo-animation.web.app/',
		github: 'https://github.com/nemutas/app-mixamo-animation',
		qiita: 'https://qiita.com/nemutas/items/6202b3f8458376ab79b6'
	},
	// 8
	work8: {
		title: 'Morph Cube',
		thumbnail: 'morph_cube',
		description: `glbファイルを使用したアプリケーションです。
		BlenderのShape Keyを設定したCubeをインポートして、モーフィングさせました。`,
		link: 'https://01rs0.csb.app/',
		sandbox: 'https://codesandbox.io/s/morphing-glb-mesh-01rs0',
		qiita: 'https://qiita.com/nemutas/items/67e6236921e21e84fdac'
	},
	// 9
	work9: {
		title: 'Legoman Designer',
		thumbnail: 'legoman_designer',
		description: `glbファイルを使用したアプリケーションです。
		BlenderでモデリングしたLego人形をインポートして、頭や胴体などの色・光沢・粗さを変えられるようにしました。`,
		link: 'https://nemutas.github.io/app-legoman-designer/',
		github: 'https://github.com/nemutas/app-legoman-designer',
		qiita: 'https://qiita.com/nemutas/items/27a8e961dd8f65360b0b'
	},
	// 10
	work10: {
		title: 'Glass Effect',
		thumbnail: 'glass_effect',
		description: `MeshPhysicalMaterialを使用して、屈折表現を実装しました。
		Materialのパラメーターが、どのような影響をあたえるのか試すことができるアプリケーションです。`,
		link: 'https://0gt2k.csb.app/',
		sandbox: 'https://codesandbox.io/s/glass-effect-using-physicalmaterial-with-r3f-0gt2k'
	},
	// 11
	work11: {
		title: 'Twisted Colorful Shpere',
		thumbnail: 'twisted_colorful_shpere',
		description: `Shaderを使用したアプリケーションです。
		球体の頂点をツイストさせ、さらにPerlinノイズを与えています。
		`,
		link: 'https://vhjr1.csb.app/',
		sandbox: 'https://codesandbox.io/s/twisted-colorful-sphere-using-vertexshader-with-r3f-vhjr1'
	},
	// 12
	work12: {
		title: 'Fluffy Sphere',
		thumbnail: 'fluffy_sphere',
		description: `Shaderを使用したアプリケーションです。
		球体の頂点をSimplexノイズで変形させています。ふわふわした球体を表現しました。`,
		link: 'https://yelco.csb.app/',
		sandbox: 'https://codesandbox.io/s/snoise-sphere-using-vertexshader-with-r3f-yelco'
	},
	// 13
	work13: {
		title: 'Glow Wave',
		thumbnail: 'glow_wave',
		description: `Displacement Textureを使用したアプリケーションです。
		中心から波紋が広がるようなCanvasをTextureに割り当てて、Planeに波を起こしています。UnrealBloom Effectを使用して、発光させています。`,
		link: 'https://x4o3q.csb.app/',
		sandbox: 'https://codesandbox.io/s/wave-plane-with-displacement-map-x4o3q'
	},
	// 14
	work14: {
		title: 'Fisheye Lens',
		thumbnail: 'fisheye_lens',
		description: `Shaderを使用したアプリケーションです。
		Planeの頂点をマウス位置からの距離によって拡大することによって、魚眼レンズのような表現を実装しました。`,
		link: 'https://jimpy.csb.app/',
		sandbox: 'https://codesandbox.io/s/fisheye-lens-using-vertexshader-with-r3f-jimpy',
		qiita: 'https://qiita.com/nemutas/items/386c4079343b0cdf2f31'
	},
	// 15
	work15: {
		title: 'Displacement Drawer',
		thumbnail: 'displacement_drawer',
		description: `Displacement Textureを使用したアプリケーションです。
		マウスでCanvasに描いた絵を、リアルタイムでPlaneに反映させています。`,
		link: 'https://nemutas.github.io/r3f-canvas-displacement/',
		github: 'https://github.com/nemutas/r3f-canvas-displacement',
		qiita: 'https://qiita.com/nemutas/items/6913ed77e134122457f2'
	},
	// 16
	work16: {
		title: 'Audio Visualizer',
		thumbnail: 'audio_visualizer',
		description: `Displacement Textureを使用したアプリケーションです。
		Web Audio APIを使用してFFT（高速フーリエ変換）したサウンドデータをCanvasに描画して、それをリアルタイムでPlaneに反映させています。`,
		link: 'https://nemutas.github.io/r3f-audio-visualizer/',
		github: 'https://github.com/nemutas/r3f-audio-visualizer',
		qiita: 'https://qiita.com/nemutas/items/6913ed77e134122457f2'
	},
	// 17
	work17: {
		title: 'Clipping Torusknot',
		thumbnail: 'clipping_torusknot',
		description: `Torusknotを3つの面でClippingしています。さらに、断面の描画も行っています。`,
		link: 'https://swnl9.csb.app/',
		sandbox: 'https://codesandbox.io/s/clipping-geometry-swnl9',
		qiita: 'https://qiita.com/nemutas/items/d9803a062b2968e7099d'
	},
	// 18
	work18: {
		title: 'Follow Mouse3d',
		thumbnail: 'follow_mouse3d',
		description: `ウィンドウ上（x-y空間）で移動したマウス座標を3D変換して、ライトを追従させています。`,
		link: 'https://tkhzh.csb.app/',
		sandbox: 'https://codesandbox.io/s/mouse-3d-using-ray-with-r3f-tkhzh'
	},
	// 19
	work19: {
		title: 'Grow Line',
		thumbnail: 'grow_line',
		description: `MeshSurfaceSamplerを使用して、Torusの表面にランダムな線を描画します。一本の線は、折れ曲がりながら徐々に増えていきます。`,
		link: 'https://gjw59.csb.app/',
		sandbox: 'https://codesandbox.io/s/grow-line-using-meshsurfacesampler-with-r3f-gjw59'
	},
	// 20
	work20: {
		title: 'Morph Particles',
		thumbnail: 'morph_particles',
		description: `Shaderを使用したアプリケーションです。
		MeshSurfaceSamplerを使用して、色々なGeometryの形のParticlesをモーフィングさせています。`,
		link: 'https://4lrpk.csb.app/',
		sandbox: 'https://codesandbox.io/s/morph-particle-using-meshsurfacesampler-with-r3f-4lrpk'
	}
}
