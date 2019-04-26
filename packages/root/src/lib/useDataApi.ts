import { useState, useEffect, useReducer, Reducer } from "react";
import { getWithJwtAsync } from "lib/http";

const enum DataFetchActionTypes {
  FETCH_INIT = "FETCH_INIT",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE"
}

interface IState<T> {
  isLoading: boolean;
  data: T;
  error: any;
}

interface IAction<T> {
  type: DataFetchActionTypes;
  payload?: T;
}

const dataFetchReducer: Reducer<IState<any>, IAction<any>> = (
  state,
  action
) => {
  switch (action.type) {
    case DataFetchActionTypes.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case DataFetchActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case DataFetchActionTypes.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

const useDataApi = <T>(initialUrl: string, initialData: T) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer<Reducer<IState<T>, IAction<T>>>(
    dataFetchReducer,
    {
      isLoading: false,
      error: undefined,
      data: initialData
    }
  );

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      dispatch({ type: DataFetchActionTypes.FETCH_INIT });

      try {
        const result = await getWithJwtAsync<T>(url);

        if (!didCancel) {
          dispatch({
            type: DataFetchActionTypes.FETCH_SUCCESS,
            payload: result
          });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: DataFetchActionTypes.FETCH_FAILURE });
        }
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return { ...state, setUrl };
};

export default useDataApi;
