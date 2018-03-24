const initialState = {
  count: 0
};

const INCREASE_COUNT = "INCREASE_COUNT";
const DECREASE_COUNT = "DECREASE_COUNT";

export default function counterReducer(state = initialState, action) {
  console.log("INCOMING ACTION TO counter STORE:", action);
  switch (action.type) {
    case INCREASE_COUNT:
      console.log("This is a INCREASE_COUNT action");
      return {
        count: state.count + action.payload
      };
    case DECREASE_COUNT:
      console.log("This is a DECREASE_COUNT action");
      return {
        count: state.count - action.payload
      };
    default:
      return state;
  }
}

export function increase(amount) {
  return {
    type: INCREASE_COUNT,
    payload: amount
  };
}

export function decrease(amount) {
  return {
    type: DECREASE_COUNT,
    payload: amount
  };
}
