import {
  CREATE_STREAM,
  FETCH__STREAMS,
  FETCH__STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../types";

import _ from "lodash";

// export const initialState = {
//   stream: undefined,
//   streams: undefined,

// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH__STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH__STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case FETCH__STREAMS:
      return { ...state };
    default:
      return state;
  }
};
