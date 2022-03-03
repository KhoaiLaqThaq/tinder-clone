import TinderServices from "../services/TinderServices";
import { TypeActionEnum } from "../shared/constant/TypeActionEnum";

const initialState = {
    data: null,
    message: '',
    loading: 'false',
    action: TypeActionEnum.None
}

export const ACTION_TYPES = {
    GET_DATA_REQUEST: "tinder-cards/GET_DATA_REQUEST",
    GET_DATA_SUCCESS: "tinder-cards/GET_DATA_SUCCESS",
    GET_DATA_FAIL: "tinder-cards/GET_DATA_FAIL",
    UPDATE_STAR_REQUEST: "tinder-cards/UPDATE_STAR_REQUEST",
    UPDATE_STAR_SUCCESS: "tinder-cards/UPDATE_STAR_SUCCESS",
    UPDATE_STAR_FAIL: "tinder-cards/UPDATE_STAR_FAIL",
    UPDATE_FAVORITE_REQUEST: "tinder-cards/UPDATE_FAVORITE_REQUEST",
    UPDATE_FAVORITE_SUCCESS: "tinder-cards/UPDATE_FAVORITE_SUCCESS",
    UPDATE_FAVORITE_FAIL: "tinder-cards/UPDATE_FAVORITE_FAIL"
};

export default function tinderCardReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case ACTION_TYPES.GET_DATA_REQUEST:
        case ACTION_TYPES.UPDATE_STAR_REQUEST:
        case ACTION_TYPES.UPDATE_FAVORITE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                data: null,
                action: TypeActionEnum.Request
            });
        case ACTION_TYPES.GET_DATA_SUCCESS:
        case ACTION_TYPES.UPDATE_STAR_SUCCESS:
        case ACTION_TYPES.UPDATE_FAVORITE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                data: payload.data,
                message: payload.message,
                action: TypeActionEnum.LoadSuccess
            });
        case ACTION_TYPES.GET_DATA_FAIL:
        case ACTION_TYPES.UPDATE_STAR_FAIL:
        case ACTION_TYPES.UPDATE_FAVORITE_FAIL:
            return Object.assign({}, state, {
                loading: false,
                data: null,
                message: payload.message,
                action: TypeActionEnum.LoadFailure
            });
        default:
            return state;
    }
}

export const getTinderCards = () => async(dispatch) => {
    try {
        dispatch({type: ACTION_TYPES.GET_DATA_REQUEST});
        const tinderCards = await TinderServices.getTinderCards();
        const data = Object.assign(tinderCards.data);
        dispatch({
            type: ACTION_TYPES.GET_DATA_SUCCESS,
            payload: {data}
        });
    } catch (error) {
        dispatch({
            type: ACTION_TYPES.GET_DATA_FAIL,
            payload: { message: `Error ${error.toString()}` }
        });
    }
}


