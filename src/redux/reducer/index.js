import {
    GET_INFO_USER
} from "../actions/actions-types";

let initialState = {
    infoUserLog: {},  
  };

  const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      //*---GET GENERALES---//
      case GET_INFO_USER:
        return {
          ...state,
          infoUserLog: payload,
        };  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  