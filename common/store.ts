import { proxy } from 'valtio';
import { Cursor } from './types';

export const icosaState = proxy({ frontFace: 'work1' })

export const applicationState = proxy({ isTop: true, isDistortion: true })

export const cursor: { type: Cursor } = { type: 'auto' }
