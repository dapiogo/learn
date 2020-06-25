import {
  LOADING_STATES,
  GET_BUDGET,
  GET_BUDGET_REQUEST,
  GET_BUDGET_SUCCESS,
  GET_BUDGET_FAILURE,
} from "../const/index";

const initialState = {
  loadingState: {},
  budget: {},
  budgetedCategories: [],
};

const budget = (state = initialState, action) => {
  const newLoadingState = { ...state.loadingState };
  switch (action.type) {
    case GET_BUDGET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case GET_BUDGET_SUCCESS:
      delete newLoadingState.GET_BUDGET_REQUEST;
      return {
        ...state,
        budget: action.payload,
        loadingState: newLoadingState,
      };

    case GET_BUDGET_FAILURE:
      delete newLoadingState.GET_BUDGET_REQUEST;
      return {
        ...state,
        budget: {},
        loadingState: newLoadingState,
      };
    default:
      return state;
  }
};

export default budget;
