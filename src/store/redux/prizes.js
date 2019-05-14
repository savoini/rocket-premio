import { toast } from 'react-toastify';

export const Types = {
  ADD_PRIZE: '@prize/ADD_PRIZE',
  REMOVE_PRIZE: '@prize/REMOVE_PRIZE',
};

export const Creators = {
  addPrize: ({ name }) => ({
    type: Types.ADD_PRIZE,
    payload: { name },
  }),

  removePrize: id => ({
    type: Types.REMOVE_PRIZE,
    payload: { id },
  }),
};

const INITIAL_STATE = [];

export default function prizes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PRIZE:
      toast.success(`${action.payload.name} successfully added!!!`);
      return [...state, { id: Math.random(), name: action.payload.name }];
    case Types.REMOVE_PRIZE:
      toast.success("The Prize removed from the draw list :'( ");
      return [...state.filter(prize => prize.id !== action.payload.id)];
    default:
      return state;
  }
}
