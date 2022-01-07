import { useEffect, useState } from "react";
import { useReducerWrapper } from "./useReducerWrapper";

function useFetchUsers() {
  const [users, setUsers] = useState<[]>([]);
  const { dispatch } = useReducerWrapper();

  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "FINISHED" });
        setUsers(json);
      });
  }, [dispatch]);

  return users;
}

export { useFetchUsers };
