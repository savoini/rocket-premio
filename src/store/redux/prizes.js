export const Types = {
  ADD_PRIZE: '@prize/ADD_PRIZE',
  REMOVE_PRIZE: '@prize/REMOVE_PRIZE',
};

export const Creators = {
  addPrize: name => ({
    type: Types.ADD_PRIZE,
    payload: { name },
  }),

  removePrize: id => ({
    type: Types.REMOVE_PRIZE,
    payload: { id },
  }),
};

const INITIAL_STATE = {};

export default function prizes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PRIZE:
      return { latitude: action.payload.latitude, longitude: action.payload.longitude };
    case Types.REMOVE_PRIZE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
