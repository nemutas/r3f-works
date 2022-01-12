import dynamic from 'next/dynamic';
import { css } from '@emotion/react';
import { Balloon } from '../components/Balloon';
import { Layout } from '../components/Layout';
import { Links } from '../components/Links';
import { Top } from '../components/Top';

const TCanvas = dynamic(() => import('../components/three/TCanvas'), { ssr: false })

export default function Home() {
	return (
		<Layout>
			<div css={styles.container}>
				<TCanvas />
				<Balloon />
				<Links />
				<Top />
			</div>
		</Layout>
	)
}

const styles = {
	container: css`
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	`
}
