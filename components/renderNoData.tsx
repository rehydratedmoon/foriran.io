import { UseQueryResult } from "@tanstack/react-query";

type ErrorType = {
  message: string;
  [key: string]: any;
};

export const renderNoData = (q: UseQueryResult<any, Error>) => {
  if (q.isLoading) return <>Loading...</>;
  if (q.isError)
    return (
      <>
        <p>Oops! Something went wrong. </p>
        {q.error?.message && <p>Error Details: {q.error?.message}</p>}
      </>
    );
  if (q.data) return null;
  // return null;
};
