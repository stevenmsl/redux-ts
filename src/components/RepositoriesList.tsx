import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useSelectorRepos } from "../hooks/useSelectorRepos";
import { RepositoriesState, RootState } from "../state";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");

  /*
      - get a action generator that has been
        bound to a dispatcher
  */
  const { searchRepositories } = useActions();

  const { data, error, loading } = useSelectorRepos();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
