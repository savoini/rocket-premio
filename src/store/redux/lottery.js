export const Types = {
  LOTTERY_REQUEST: '@lottery/LOTTERY_REQUEST',
  LOTTERY_SUCCESS: '@lottery/LOTTERY_SUCCESS',
  LOTTERY_ERROR: '@lottery/LOTTERY_ERROR',
};

export const Creators = {
  generate: () => ({
    type: Types.LOTTERY_REQUEST,
    payload: {},
  }),

  lotterySuccess: winners => ({
    type: Types.LOTTERY_SUCCESS,
    payload: { winners },
  }),

  lotteryError: error => ({
    type: Types.LOTTERY_ERROR,
    payload: { error },
  }),
};

const INITIAL_STATE = {
  error: null,
  loading: false,
  winners: [],
};

export default function lottery(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOTTERY_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.LOTTERY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        winners: [...state.winners, ...action.payload.winners],
      };
    case Types.LOTTERY_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
