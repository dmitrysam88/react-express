const initialState = {
  users: []
};

export default function users(state = initialState, action){
  switch (action.type){
    case 'ADD_USER':
      return {
        ...state,
        users: [ ...state.users, action.payload ]
      };
      break;
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      }
  }
  return state;
}