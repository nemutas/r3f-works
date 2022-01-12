import gsap from 'gsap';
import React, { useEffect, useRef, VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { applicationState } from '../common/store';
import { setCursor } from '../common/utils';

export const Top: VFC = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	const scrollAnimation = () => {
		gsap.to('.anime-top', {
			y: '-100%',
			duration: 1,
			ease: 'power2.in',
			onComplete: () => {
				applicationState.isTop = false
				setCursor('light')
			}
		})
	}

	useEffect(() => {
		containerRef.current!.onmousemove = () => {
			setCursor('auto')
		}
		containerRef.current!.onwheel = e => {
			if (0 < e.deltaY) {
				scrollAnimation()
			}
		}
	}, [])

	return (
		<div ref={containerRef} css={styles.container} className="anime-top">
			{/* <div css={styles.titleContainer}></div> */}
			<div css={styles.titleContainer}>
				<div css={styles.text}>Nemutas</div>
				<div css={styles.divider} />
				<div css={styles.subText}>Works</div>
			</div>
			{/* scroller */}
			<div css={styles.scrollContainer} onClick={scrollAnimation}>
				<div css={styles.scrollbarAnimationContainer}>
					<div css={styles.scrollbar} />
				</div>
			</div>
		</div>
	)
}

const animation = {
	scloll: keyframes`
    0% {
      transform: translate(0px, -100%);
    },
    100% {
      transform: translate(0px, 100%);
    }
  `
}

const styles = {
	container: css`
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	titleContainer: css`
		display: grid;
		grid-template-rows: auto auto auto;
	`,
	text: css`
		padding-left: 10px;
		font-size: clamp(5rem, 12vw, 10rem);
		color: #fff;
		user-select: none;
	`,
	subText: css`
		padding-right: 10px;
		font-size: clamp(3rem, 9vw, 6rem);
		color: #fff;
		text-align: right;
		user-select: none;
	`,
	divider: css`
		width: clamp(300px, 60vw, 600px);
		height: 2px;
		background-color: #fff;
	`,
	scrollContainer: css`
		position: absolute;
		bottom: 10px;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 2px solid #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	`,
	scrollbarAnimationContainer: css`
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		animation: ${animation.scloll} 2s linear infinite;
	`,
	scrollbar: css`
		width: 1px;
		height: 80%;
		background-color: #fff;
		transform: rotate(180deg);

		&::after {
			content: '';
			position: absolute;
			width: 20px;
			height: 1px;
			background-color: #fff;
			transform-origin: left;
			transform: translate(1px, 0px) rotate(50deg);
		}

		&::before {
			content: '';
			position: absolute;
			width: 20px;
			height: 1px;
			background-color: #fff;
			transform-origin: right;
			transform: translate(-20px, 0px) rotate(-50deg);
		}
	`
}
