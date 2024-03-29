import { GET_SONG } from "../actions";

const initialState = {
  song: {},
};

const songReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_SONG:
      return {
        ...state,
        song: state.song.concat(action.payload),
      };
    default:
      return state;
  }
};
