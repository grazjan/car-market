import { FETCH_CARS, FETCH_CARS_BY_ID } from '../constants/actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_CARS:
            return {
                ...state,
                items: action.payload.data.map((car) => (
                    {
                        id: car.id,
                        ...car.attributes,
                        medias: car.attributes.medias.data
                    }
                )),
                page: action.payload.meta.pagination.page,
                pageCount: action.payload.meta.pagination.pageCount
            }
        case FETCH_CARS_BY_ID:
            return {
                ...state,
                currentItem: {
                    id: action.payload.data.id,
                    ...action.payload.data.attributes,
                    medias: action.payload.data.attributes.medias.data
                }
            }
        default:
            return state;
    }
}