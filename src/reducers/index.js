const INITIAL_STATE = {
  user: null,
  loggedIn: false,
  notes: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, loggedIn: true };
    case "LOGOUT":
      return { ...state, ...INITIAL_STATE };
    case "NOTES":
      return { ...state, notes: action.payload };
    case "ADD_NOTE":
      return { ...state, notes: [action.payload, ...state.notes] };
    default:
      return state;
  }
};
