import gsap from 'gsap';
import React, { useEffect, useRef, VFC } from 'react';
import { useSnapshot } from 'valtio';
import { css } from '@emotion/react';
import { applicationState, icosaState } from '../common/store';
import { setCursor } from '../common/utils';
import { works } from '../resources/works';

export const Links: VFC = () => {
	const snap = useSnapshot(icosaState)
	const appSnap = useSnapshot(applicationState)

	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		containerRef.current!.classList.add('anime-links-container')

		containerRef.current!.onmouseenter = () => setCursor('auto')
		containerRef.current!.onmouseleave = () => setCursor('light')
	}, [])

	useEffect(() => {
		if (!appSnap.isDistortion) {
			gsap.to('.anime-links-container', {
				x: '0%',
				duration: 0.7,
				ease: 'power2.in'
			})
		}
	}, [appSnap.isDistortion])

	return (
		<div ref={containerRef} css={styles.container}>
			<LinkIcon href={works[snap.frontFace].github}>
				<img css={styles.github} src="/assets/images/github.svg" />
			</LinkIcon>
			<LinkIcon href={works[snap.frontFace].sandbox}>
				<img css={styles.sandbox} src="/assets/images/codesandbox.svg" />
			</LinkIcon>
			<LinkIcon href={works[snap.frontFace].qiita}>
				<img css={styles.qiita} src="/assets/images/qiita.svg" />
			</LinkIcon>
		</div>
	)
}

type LinkIconProps = {
	href?: string
	children: React.ReactNode
}

const LinkIcon: VFC<LinkIconProps> = props => {
	const { href, children } = props

	return (
		<a css={[styles.button, !href && styles.disable]} href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	)
}

const styles = {
	container: css`
		position: absolute;
		right: 0px;
		bottom: 0px;
		padding: 15px;
		display: flex;
		grid-gap: 15px;
		transform: translate(100%, 0);
	`,
	button: css`
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		border-radius: 50%;
		transform: rotate(0deg);
		transition: transform 0.3s linear;

		&:hover {
			transform: rotate(-360deg);
		}
	`,
	disable: css`
		&::after {
			content: '';
			position: absolute;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			background-color: rgba(0, 0, 0, 0.5);
		}
		&:hover {
			transform: rotate(0deg);
		}
	`,
	github: css`
		width: 100%;
		height: 100%;
	`,
	sandbox: css`
		width: 100%;
		height: 100%;
	`,
	qiita: css`
		width: 100%;
		height: 100%;
		padding: 5px;
		background-color: #55c500;
	`
}
