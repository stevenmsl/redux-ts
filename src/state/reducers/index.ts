import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

/*
  - define a type for the entire state stored in 
    the Redux store
  - this type is required to properly type the useSelector
    hook used to retrieve a piece of info from the
    state
*/
export type RootState = ReturnType<typeof reducers>;
/*
  - we need to export RepositoriesState as well
  - this type is also required by the useSelector
    hook 
*/
export * from "./repositoriesReducer";
