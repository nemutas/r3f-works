import Head from 'next/head';
import React, { VFC } from 'react';
import { css } from '@emotion/react';

type LayoutProps = {
	title?: string
	description?: string
	children: React.ReactNode
}

export const Layout: VFC<LayoutProps> = props => {
	const { title = 'Nemutas｜Works', description = "nemutas' three.js works", children } = props

	return (
		<div css={styles.container}>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main css={styles.main}>{children}</main>
		</div>
	)
}

// --------------------------------------------------------
// styles

const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
	`,
	main: css`
		width: 100%;
		height: 100%;
	`
}
