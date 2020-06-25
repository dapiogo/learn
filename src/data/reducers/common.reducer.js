import {
  LOADING_STATES,
  ALL_CATEGORIES_GET,
  ALL_CATEGORIES_REQUEST,
  ALL_CATEGORIES_SUCCESS,
  ALL_CATEGORIES_FAILURE,
} from "../const/index";

const initialState = {
  loadingState: {},
  allCategories: [],
};

const categories = (state = initialState, action) => {
  const newLoadingState = { ...state.loadingState };
  switch (action.type) {
    case ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case ALL_CATEGORIES_SUCCESS:
      delete newLoadingState.ALL_CATEGORIES_REQUEST;
      return {
        ...state,
        allCategories: action.payload,
        loadingState: newLoadingState,
      };

    case ALL_CATEGORIES_FAILURE:
      delete newLoadingState.ALL_CATEGORIES_REQUEST;
      return {
        ...state,
        allCategories: [],
        loadingState: newLoadingState,
      };
    default:
      return state;
  }
};

export default categories;
