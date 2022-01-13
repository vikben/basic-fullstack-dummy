/**
 * @desc this files contains custome hook used to post and get data from server
 * @author Vikram vikben@gmail.com
 */

import { useContext, useCallback } from 'react';
import axios from 'axios';

import { AppContext } from '../context';

// API Base URL
const BASE_URL = 'http://localhost:5001';

/**
 * Get data from server with the give url
 * @param url - api URL
 */
const fetchData = async (url: string) => {
  return await axios.get(url);
};

/**
 * Custome hook to get data from server
 * @param query - query for URL
 */
export const useGetData = (query: string) => {
  const { dispatch } = useContext(AppContext);

  const getData = useCallback(async () => {
    dispatch({
      type: 'LOADING',
      payload: true,
    });
    try {
      const { data } = await fetchData(`${BASE_URL}${query}`);
      dispatch({
        type: 'SET_DATA',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err,
      });
    } finally {
      dispatch({
        type: 'LOADING',
        payload: false,
      });
    }
  }, [query, dispatch]);
  return [getData];
};
