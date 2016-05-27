import * as types from '../constants/constants'

export const drag = (draggedAnimal, targetZone) => {
	return { type: types.DRAG, draggedAnimal, targetZone }
}
