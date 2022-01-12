import { cursor } from './store';
import { Cursor } from './types';

export const setCursor = (type: Cursor) => {
	switch (type) {
		case 'light':
			cursor.type = 'light'
			document.body.style.cursor = 'none'
			break
		case 'pointer':
			cursor.type = 'pointer'
			document.body.style.cursor = 'pointer'
			break
		default:
			cursor.type = 'auto'
			document.body.style.cursor = 'auto'
	}
}
