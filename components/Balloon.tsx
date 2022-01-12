import gsap from 'gsap';
import React, { useEffect, useRef, useState, VFC } from 'react';
import { useSnapshot } from 'valtio';
import { css } from '@emotion/react';
import { applicationState, icosaState } from '../common/store';
import { setCursor } from '../common/utils';
import { works } from '../resources/works';

export const Balloon: VFC = () => {
	const snap = useSnapshot(icosaState)
	const appSnap = useSnapshot(applicationState)
	const [isInit, setInit] = useState(appSnap.isDistortion)

	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		containerRef.current!.onmouseenter = () => setCursor('auto')
		containerRef.current!.onmouseleave = () => setCursor('light')
	}, [])

	useEffect(() => {
		if (!appSnap.isDistortion) {
			gsap.to('.anime-balloon-container', {
				x: '0%',
				duration: 0.7,
				ease: 'power2.in',
				onComplete: () => {
					setInit(false)
				}
			})
		}
	}, [appSnap.isDistortion])

	useEffect(() => {
		if (!isInit) {
			gsap.to('.anime-balloon-title', { y: 0, height: '100%', duration: 0.7, ease: 'power2.in' })
			gsap.to('.anime-balloon-description', { y: 0, height: '100%', duration: 0.7, ease: 'power2.in' })
		}
	}, [snap.frontFace, isInit])

	return (
		<div ref={containerRef} css={styles.container} className="anime-balloon-container">
			<div css={styles.title} className="anime-balloon-title">
				{works[snap.frontFace].title}
			</div>
			<div css={styles.divider} />
			<div css={styles.description} className="anime-balloon-description">
				{works[snap.frontFace].description}
			</div>
		</div>
	)
}

const styles = {
	container: css`
		position: absolute;
		top: 10px;
		right: 0;
		width: clamp(300px, 100vw, 450px);
		padding: 10px;
		padding-right: 0;
		display: grid;
		grid-template-rows: 50px auto auto;
		grid-gap: 15px;
		transform: translate(100%, 0);
	`,
	title: css`
		padding-right: 10px;
		font-size: clamp(2rem, 5vw, 3rem);
		line-height: 60px;
		color: #fff;
		height: 0px;
		overflow: hidden;
		user-select: none;
		transform: translate(0px, 60px);
	`,
	description: css`
		padding-right: 10px;
		font-size: clamp(1.5rem, 3vw, 2rem);
		color: #fff;
		height: 0px;
		white-space: pre-line;
		overflow: hidden;
		user-select: none;
		transform: translate(0px, -20px);
	`,
	divider: css`
		width: 100%;
		height: 2px;
		background-color: #fff;
	`
}
