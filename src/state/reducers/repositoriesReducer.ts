import { ActionType } from "../action-types";
import { Action } from "../actions";

/*
  - the type of the piece of data that this
    reducer is maintaining 
*/
export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

/*
    - annotate a return type
    - annotate the action parameter
      - define an interface for each action    
*/
const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (
    action.type // type guard
  ) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
