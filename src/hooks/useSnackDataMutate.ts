import axios, { AxiosPromise } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SnackData } from '../interface/SnackData';

const API_URL = 'http://localhost:3001';

const postData = async (data: SnackData): AxiosPromise<any> => {
  const response = axios.post(API_URL + '/snack', data);
  return response;
}

export function useSnackData() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['snack-data'])
    }
  });

  return mutate;
}
