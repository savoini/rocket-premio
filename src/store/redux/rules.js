export const Types = {
  ADD_RULES: '@rules/ADD_RULES',
};

export const Creators = {
  addRule: ({ repository, stars, forks }) => ({
    type: Types.ADD_RULES,
    payload: { repository, stars, forks },
  }),
};

const INITIAL_STATE = {
  repository: '',
  stars: false,
  forks: false,
};

export default function rules(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_RULES:
      return { ...action.payload };
    default:
      return state;
  }
}
