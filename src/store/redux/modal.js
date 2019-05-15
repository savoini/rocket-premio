export const Types = {
  ADD_REQUEST: '@modal/ADD_REQUEST',
};

export const Creators = {
  loading: open => ({
    type: Types.ADD_REQUEST,
    payload: { open },
  }),
};

const INITIAL_STATE = {
  open: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...action.payload };
    default:
      return state;
  }
}
