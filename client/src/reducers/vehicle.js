import { FETCH_VEHICLES, FETCH_VEHICLE_BY_ID } from '../constants/actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_VEHICLES:
            return {
                ...state,
                items: action.payload.data.map((vehicle) => (
                    {
                        id: vehicle.id,
                        ...vehicle.attributes,
                        medias: vehicle.attributes.medias.data
                    }
                )),
                page: action.payload.meta.pagination.page,
                pageCount: action.payload.meta.pagination.pageCount
            }
        case FETCH_VEHICLE_BY_ID:
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