import { lectureHandlers } from './lectureHandlers';
import { authHandlers } from './authHandlers';
import { userHandlers } from '.userHandlers';

export const handlers = [...lectureHandlers, ...authHandlers, ...userHandlers];
