import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, RepositoriesState } from "../state";

/*
  - the purpose of this hooks is to type the selector 
  - seems this is no longer needed as the useSelector
    hook has been improved (dated)
*/
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

/*
  - the purpose of this hooks is to allow clients to access
    the repositories data in the state easily
*/
export const useSelectorRepos = () =>
  useSelector<RootState, RepositoriesState>((state) => state.repositories);
