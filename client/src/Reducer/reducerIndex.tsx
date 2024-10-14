import { GET_DATA } from "../Action/actionIndex"
import { State, Action } from "../Interfaces/interface";


const initialState: State = {
    info: {},
    allInfo: [],
};

function rootReducer (state = initialState, { type, payload } : Action) {
    switch(type) {
        case GET_DATA :
            return {
                ...state,
                info : payload,
                allInfo : payload
            };

        default: return state;
    }
}

export default rootReducer;