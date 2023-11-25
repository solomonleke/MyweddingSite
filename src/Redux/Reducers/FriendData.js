const initialState = {
  singleData: {},
};
export const FriendDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SINGLEDATA":
      return { ...state, singleData: action.payload.data };
    default:
      return state;
  }
};
