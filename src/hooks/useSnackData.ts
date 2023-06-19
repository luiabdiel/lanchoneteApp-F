import axios, { AxiosPromise } from 'axios';
import { SnackData } from '../interface/SnackData';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'http://localhost:3000';

const fetchData = async (): AxiosPromise<SnackData[]> => {
  const response = axios.get(API_URL + '/snack');
  return response;
}

export function useSnackData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['snack-data'],
    retry: 2
  });

  return {
    ...query,
    data: query.data?.data
  }
}
