import * as types from '../constants/constants'

// Drag and drop action
export const drag = (draggedAnimal, targetZone) => {
	return { type: types.DRAG, draggedAnimal, targetZone }
};
