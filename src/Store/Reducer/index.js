const initialState = {
  counterVal: 10
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ON_UP":
      newState.counterVal++;
      break;

    case "ON_DOWN":
      newState.counterVal--;
      break;
  }
  return newState;
};

export default reducer;
