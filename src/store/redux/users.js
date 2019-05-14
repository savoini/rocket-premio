import { toast } from 'react-toastify';

export const Types = {
  ADD_REQUEST: '@users/ADD_REQUEST',
  ADD_SUCCESS: '@users/ADD_SUCCESS',
  REMOVE_REQUEST: '@users/REMOVE_REQUEST',
  ADD_ERROR: '@users/ADD_ERROR',
};

/**
 *
 * Actions
 */
export const Creators = {
  addUserRequest: username => ({
    type: Types.ADD_REQUEST,
    payload: { username },
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addUserFailure: (error) => {
    toast.error(error);
    return {
      type: Types.ADD_FAILURE,
      payload: { error },
    };
  },

  removeUser: id => ({
    type: Types.REMOVE_REQUEST,
    payload: { id },
  }),
};

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, ...action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.REMOVE_REQUEST:
      toast.success('User removed!');
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data.filter(user => user.id !== action.payload.id)],
      };

    default:
      return state;
  }
}
