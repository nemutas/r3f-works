export type Work = {
	title: string
	thumbnail: string
	description: string
	link: string
	github?: string
	qiita?: string
	sandbox?: string
}

export type Cursor = 'auto' | 'pointer' | 'light'
