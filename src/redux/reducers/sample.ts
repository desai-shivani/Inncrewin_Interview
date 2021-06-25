import * as types from "../types";

export interface SampleState {
  counter: number;
}

interface INCREMENT_ONE {
  type: "INCREMENT_ONE"
}

interface INCREMENT_BY_COUNT {
  type: "INCREMENT_BY_COUNT",
  count: number
}

export type SampleAction = INCREMENT_ONE | INCREMENT_BY_COUNT;

const initialState: SampleState = {
  counter: 0,
};

export default (state = initialState, action: SampleAction): SampleState => {
  switch (action.type) {
    case types.INCREMENT_ONE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case types.INCREMENT_BY_COUNT:
      return {
        ...state,
        counter: state.counter + action.count,
      };
    default:
      return state;
  }
};
