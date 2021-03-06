import { useQuery } from 'react-query';

import fetchStarships from 'src/queries/fetchStarships';

export const useStarships = (pageCount: number) => {
  const { data, isLoading, isError, isFetching, refetch } = useQuery(
    ['starships', pageCount],
    () => fetchStarships(pageCount),
    {
      enabled: Boolean(pageCount)
    }
  );

  return { data, isLoading, isError, isFetching, refetch };
};
